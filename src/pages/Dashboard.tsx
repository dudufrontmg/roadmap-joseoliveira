import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { read, utils } from 'xlsx';
import { Sidebar } from '../components/dashboards/Sidebar';
import { MetricsDisplay } from '../components/dashboards/MetricsDisplay';
import { Charts } from '../components/dashboards/Charts';
import { CauseMetricsDisplay } from '../components/dashboards/CauseMetricsDisplay';
import { CauseChart } from '../components/dashboards/CauseChart';
import type { 
  FilterState, 
  ProjectStage, 
  CauseData, 
  CauseTableRow, 
  CauseTableData, 
  FilterOptions,
  ProjetoExcelData,
  HorasDetalhadasData 
} from '../types';
import { categorizarTipoAtividade, isHoraImprodutiva, mapActivityToCategory, isActivityInStage } from '../utils/activityUtils';
import { parseExcelDate, isDateInRange } from '../utils/dateUtils';
import { startOfMonth, endOfMonth } from 'date-fns';
import { loadCauseData, getAvailableCauseStages, getCauseChartData, calculateCauseMetrics, getCauseTableData } from '../utils/causeUtils';
import { extractProjectNumber } from '../utils/projectUtils';

export const Dashboard = () => {
  const location = useLocation();
  const [projetosData, setProjetosData] = useState<ProjetoExcelData[]>([]);
  const [horasData, setHorasData] = useState<HorasDetalhadasData[]>([]);
  const [causeData, setCauseData] = useState<CauseData[]>([]);
  const [causeTableData, setCauseTableData] = useState<CauseTableRow[]>([]);
  const [dateRange, setDateRange] = useState<{ min: string; max: string }>({ min: '', max: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    horasVendidas: 0,
    horasPlanejadas: 0,
    horasConsumidas: 0,
    horasImprodutivas: 0,
    saldoHoras: 0,
  });
  const [atividadeData, setAtividadeData] = useState<any[]>([]);
  const [causeMetrics, setCauseMetrics] = useState({
    etapaSelecionada: '',
    variacao: 0,
    diferencaHoras: 0
  });
  const [causeChartData, setCauseChartData] = useState<CauseChartData[]>([]);

  const [filters, setFilters] = useState<FilterState>({
    codigoProjeto: '',
    etapaProjeto: 'todas',
    atividade: [],
    tipoAtividade: [],
    periodoInicio: '',
    periodoFim: '',
    classificacaoCausa: ''
  });

  const [availableFilters, setAvailableFilters] = useState<FilterOptions>({
    codigoProjeto: [],
    atividade: [],
    tipoAtividade: ['Todos os Tipos', 'Produtivas', 'Improdutivas', 'Fora do escopo', 'Translado'],
    classificacaoCausa: []
  });

  useEffect(() => {
    console.log('Dashboard carregado ou rota alterada:', location.pathname);
    const loadExcelFiles = async () => {
      try {
        setError(null);
        setLoading(true);
        
        // Load Excel files
        const [projetosResponse, horasResponse] = await Promise.all([
          fetch('/documents/Projetos_em_Horas.xlsx'),
          fetch('/documents/Horas_Detalhadas.xlsx')
        ]);

        if (!projetosResponse.ok) {
          throw new Error(`Failed to load Projetos_em_Horas.xlsx: ${projetosResponse.statusText}`);
        }

        if (!horasResponse.ok) {
          throw new Error(`Failed to load Horas_Detalhadas.xlsx: ${horasResponse.statusText}`);
        }

        // Convert to array buffers
        const [projetosBuffer, horasBuffer] = await Promise.all([
          projetosResponse.arrayBuffer(),
          horasResponse.arrayBuffer()
        ]);

        // Read workbooks
        const projetosWorkbook = read(projetosBuffer, { type: 'array' });
        const horasWorkbook = read(horasBuffer, { type: 'array' });

        // Get sheets
        const projetosSheet = projetosWorkbook.Sheets['Extração de Dados'];
        if (!projetosSheet) {
          throw new Error('Sheet "Extração de Dados" not found in Projetos_em_Horas.xlsx');
        }

        const horasSheet = horasWorkbook.Sheets[horasWorkbook.SheetNames[0]];
        if (!horasSheet) {
          throw new Error('First sheet not found in Horas_Detalhadas.xlsx');
        }

        // Convert to JSON
        const projetosJson = utils.sheet_to_json(projetosSheet, { raw: true });
        const horasJson = utils.sheet_to_json(horasSheet, { raw: true });

        // Set data
        setProjetosData(projetosJson as ProjetoExcelData[]);
        setHorasData(horasJson as HorasDetalhadasData[]);

        // Extract project codes
        const projetosCodigos = new Set(projetosJson
          .map((row: any) => row['Cod Projeto']?.toString().trim())
          .filter(Boolean));

        const horasCodigos = new Set(horasJson
          .map((row: any) => row['Código do Projeto']?.toString().trim())
          .filter(Boolean));

        const allCodigos = Array.from(new Set([...projetosCodigos, ...horasCodigos]))
          .filter(Boolean)
          .sort();

        setAvailableFilters(prev => ({
          ...prev,
          codigoProjeto: allCodigos
        }));

        // Set date range
        const datas = horasJson
          .map((row: any) => parseExcelDate(row['Data Apontamento']))
          .filter((date): date is Date => date !== null);

        if (datas.length > 0) {
          const minDate = new Date(Math.min(...datas.map(d => d.getTime())));
          const maxDate = new Date(Math.max(...datas.map(d => d.getTime())));

          const dateRange = {
            min: startOfMonth(minDate).toISOString().slice(0, 7),
            max: endOfMonth(maxDate).toISOString().slice(0, 7)
          };

          setDateRange(dateRange);
          setFilters(prev => ({
            ...prev,
            periodoInicio: dateRange.min,
            periodoFim: dateRange.max
          }));
        }

        // Load cause data
        const { causes, tableData } = await loadCauseData();
        setCauseData(causes);
        setCauseTableData(tableData);

        // Set available cause stages
        const availableCauseStages = getAvailableCauseStages(causes, filters.codigoProjeto);
        setAvailableFilters(prev => ({
          ...prev,
          classificacaoCausa: availableCauseStages
        }));

      } catch (error) {
        console.error('Error loading Excel files:', error);
        setError(error instanceof Error ? error.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadExcelFiles();
  }, [location.pathname]);

  useEffect(() => {
    if (!filters.codigoProjeto || !projetosData.length || !horasData.length) return;

    // Calculate metrics using extractProjectNumber for comparison
    const filteredData = projetosData.filter(row => {
      const excelCode = extractProjectNumber(row['Cod Projeto']?.toString().trim() || '');
      const filtroCode = extractProjectNumber(filters.codigoProjeto);
      return excelCode === filtroCode;
    });

    const metrics = {
      horasVendidas: filteredData.reduce((sum, row) => sum + (row['Hs Orçadas'] || 0), 0),
      horasPlanejadas: filteredData.reduce((sum, row) => sum + (row['Hs Programadas'] || 0), 0),
      horasConsumidas: filteredData.reduce((sum, row) => sum + (row['Hs Executadas'] || 0), 0),
      horasImprodutivas: 0, // Será calculado a partir dos dados detalhados
      saldoHoras: filteredData.reduce((sum, row) => sum + (row['Hs Saldo'] || 0), 0),
    };

    // Calcular horas improdutivas dos dados detalhados
    const horasImprodutivas = horasData
      .filter(row => {
        const matchesProject = extractProjectNumber(row['Código do Projeto']?.toString().trim() || '') === 
                             extractProjectNumber(filters.codigoProjeto);
        const isImprodutiva = isHoraImprodutiva(categorizarTipoAtividade(row['Descrição Tipo Atividade']));
        return matchesProject && isImprodutiva;
      })
      .reduce((sum, row) => sum + (Number(row['Horas Decimal']) || 0), 0);

    metrics.horasImprodutivas = horasImprodutivas;
    setMetrics(metrics);

    // Calculate chart data
    const chartData = filteredData.map(row => ({
      name: row['Descrição do Item'],
      Vendido: row['Hs Orçadas'] || 0,
      Planejado: row['Hs Programadas'] || 0,
      Consumido: row['Hs Executadas'] || 0,
      Improdutivo: 0, // Será calculado separadamente
      'Variação PlanXCons': row['Hs Programadas'] ? 
        ((row['Hs Executadas'] - row['Hs Programadas']) / row['Hs Programadas']) * 100 : 0
    }));

    setAtividadeData(chartData);

    // Update cause data
    if (filters.classificacaoCausa) {
      const causeChartData = getCauseChartData(causeData, filters.codigoProjeto, filters.classificacaoCausa);
      const causeMetrics = calculateCauseMetrics(chartData, filters.classificacaoCausa);
      const updatedTableData = getCauseTableData(causeData, causeTableData, filters.codigoProjeto, filters.classificacaoCausa);

      setCauseChartData(causeChartData);
      setCauseMetrics(causeMetrics);
      setCauseTableData(updatedTableData);
    }

  }, [filters, projetosData, horasData, causeData]);

  const handleFilterChange = (filterType: string, value: string | string[] | ProjectStage) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));

    if (filterType === 'codigoProjeto' && typeof value === 'string') {
      const projectActivities = Array.from(new Set(
        horasData
          .filter(row => {
            const rowProjectCode = extractProjectNumber(row['Código do Projeto']?.toString().trim() || '');
            const selectedProjectCode = extractProjectNumber(value);
            return rowProjectCode === selectedProjectCode;
          })
          .map(row => row['Descrição da Atividade']?.toString().trim())
          .filter(Boolean)
      )).sort();

      setAvailableFilters(prev => ({
        ...prev,
        atividade: projectActivities
      }));

      // Update available cause stages when project changes
      const availableCauseStages = getAvailableCauseStages(causeData, value);
      setAvailableFilters(prev => ({
        ...prev,
        classificacaoCausa: availableCauseStages
      }));

      setFilters(prev => ({
        ...prev,
        codigoProjeto: value,
        etapaProjeto: 'todas',
        atividade: [],
        tipoAtividade: [],
        classificacaoCausa: ''
      }));
    }
  };

  const handlePeriodoChange = (tipo: 'inicio' | 'fim', value: string) => {
    setFilters(prev => ({
      ...prev,
      [`periodo${tipo === 'inicio' ? 'Inicio' : 'Fim'}`]: value
    }));
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-red-600 text-lg font-semibold mb-2">Error Loading Data</h2>
          <p className="text-gray-700">{error}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        filters={availableFilters}
        selectedFilters={filters}
        onFilterChange={handleFilterChange}
        periodoInicio={filters.periodoInicio}
        periodoFim={filters.periodoFim}
        onPeriodoChange={handlePeriodoChange}
      />
      <main className="flex-1 p-6">
        <MetricsDisplay metrics={metrics} />
        <Charts atividadeData={atividadeData} />
        <div className="mt-6">
          <CauseMetricsDisplay metrics={causeMetrics} />
          <CauseChart data={causeChartData} tableData={causeTableData} />
        </div>
      </main>
    </div>
  );
};