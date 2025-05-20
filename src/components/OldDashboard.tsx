import { useState, useEffect } from 'react';
import { read, utils } from 'xlsx';
import { Sidebar } from './Sidebar';
import { MetricsDisplay } from './MetricsDisplay';
import { Charts } from './Charts';
import { CauseMetricsDisplay } from './CauseMetricsDisplay';
import { CauseChart } from './CauseChart';
import type { FilterState, ProjectData, ProjectStage, CauseData, CauseTableRow, CauseTableData } from '../types';
import { categorizarTipoAtividade, isHoraImprodutiva, mapActivityToCategory, isActivityInStage } from '../utils/activityUtils';
import { parseExcelDate, isDateInRange } from '../utils/dateUtils';
import { startOfMonth, endOfMonth } from 'date-fns';
import { loadCauseData, getAvailableCauseStages, getCauseChartData, calculateCauseMetrics, getCauseTableData } from '../utils/causeUtils';

export const OldDashboard = () => {
  const [projetosData, setProjetosData] = useState<ProjectData[]>([]);
  const [horasData, setHorasData] = useState<any[]>([]);
  const [causeData, setCauseData] = useState<CauseData[]>([]);
  const [causeTableData, setCauseTableData] = useState<CauseTableRow[]>([]);
  const [dateRange, setDateRange] = useState<{ min: string; max: string }>({ min: '', max: '' });
  const [filters, setFilters] = useState<FilterState>({
    codigoProjeto: '',
    etapaProjeto: 'todas',
    atividade: [],
    tipoAtividade: [],
    periodoInicio: '',
    periodoFim: '',
    classificacaoCausa: ''
  });

  const [availableFilters, setAvailableFilters] = useState({
    codigoProjeto: [] as string[],
    atividade: [] as string[],
    tipoAtividade: ['Todos os Tipos', 'Produtivas', 'Improdutivas', 'Fora do escopo', 'Translado'],
    classificacaoCausa: [] as string[]
  });

  useEffect(() => {
    const loadExcelFiles = async () => {
      try {
        const [projetosResponse, horasResponse] = await Promise.all([
          fetch('/documents/Projetos_em_Horas.xlsx'),
          fetch('/documents/Horas_Detalhadas.xlsx')
        ]);

        if (!projetosResponse.ok || !horasResponse.ok) {
          throw new Error('Falha ao carregar arquivos Excel');
        }

        const projetosArrayBuffer = await projetosResponse.arrayBuffer();
        const horasArrayBuffer = await horasResponse.arrayBuffer();

        const projetosWorkbook = read(projetosArrayBuffer, { type: 'array' });
        const horasWorkbook = read(horasArrayBuffer, { type: 'array' });

        const projetosSheet = projetosWorkbook.Sheets['Extração de Dados'];
        const horasSheet = horasWorkbook.Sheets[horasWorkbook.SheetNames[0]];

        const projetosJson = utils.sheet_to_json(projetosSheet, { raw: true });
        const horasJson = utils.sheet_to_json(horasSheet, { raw: true });

        const datas = horasJson
          .map((row: any) => parseExcelDate(row['Data Apontamento']))
          .filter((date): date is Date => date !== null);

        if (datas.length > 0) {
          const minDate = new Date(Math.min(...datas.map(d => d.getTime())));
          const maxDate = new Date(Math.max(...datas.map(d => d.getTime())));

          setDateRange({
            min: startOfMonth(minDate).toISOString().slice(0, 7),
            max: endOfMonth(maxDate).toISOString().slice(0, 7)
          });
        }

        setProjetosData(projetosJson as ProjectData[]);
        setHorasData(horasJson);

        const codigosProjetos = Array.from(new Set(projetosJson
          .map((row: any) => row['Cod Projeto']?.toString().trim())
          .filter(Boolean)))
          .sort();

        setAvailableFilters(prev => ({
          ...prev,
          codigoProjeto: codigosProjetos
        }));

        // Carregar dados de causas
        const { causes, tableData } = await loadCauseData();
        setCauseData(causes || []);
        setCauseTableData(tableData || []);

      } catch (error) {
        console.error('Erro ao carregar arquivos Excel:', error);
      }
    };

    loadExcelFiles();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        filters={availableFilters}
        selectedFilters={filters}
        onFilterChange={() => {}}
        periodoInicio={filters.periodoInicio}
        periodoFim={filters.periodoFim}
        onPeriodoChange={() => {}}
      />
      <main className="flex-1 p-6">
        <MetricsDisplay metrics={{
          horasVendidas: 0,
          horasPlanejadas: 0,
          horasConsumidas: 0,
          horasImprodutivas: 0,
          saldoHoras: 0,
        }} />
        <Charts atividadeData={[]} />
        <div className="mt-6">
          <CauseMetricsDisplay metrics={{
            etapaSelecionada: '',
            variacao: 0,
            diferencaHoras: 0
          }} />
          <CauseChart data={[]} tableData={[]} />
        </div>
      </main>
    </div>
  );
};