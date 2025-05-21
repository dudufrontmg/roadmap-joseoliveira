import React, { useMemo } from 'react';
import { Filter } from 'lucide-react';
import clsx from 'clsx';
import { ProjectStage, ProjectCode, FilterState, FilterOptions } from '../../types';
import { isActivityInStage } from '../../utils/activityUtils';
import { formatProjectCodeDisplay } from '../../utils/projectUtils';

const PROJECT_STAGES = ['todas', 'Parametrização', 'PTAF', 'TAF', 'Técnico Campo', 'TAC'];

interface SidebarProps {
  filters: FilterOptions;
  selectedFilters: FilterState;
  onFilterChange: (filterType: string, value: string | string[] | ProjectStage) => void;
  periodoInicio: string;
  periodoFim: string;
  onPeriodoChange: (tipo: 'inicio' | 'fim', value: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  filters,
  selectedFilters,
  onFilterChange,
  periodoInicio,
  periodoFim,
  onPeriodoChange,
}) => {
  const formattedProjetos = useMemo(() => {
    return formatProjectCodeDisplay(filters.codigoProjeto);
  }, [filters.codigoProjeto]);

  const filteredAtividades = useMemo(() => {
    if (!selectedFilters.codigoProjeto) return [];
    if (selectedFilters.etapaProjeto === 'todas') return filters.atividade;
    
    return filters.atividade.filter(atividade => 
      isActivityInStage(atividade, selectedFilters.etapaProjeto)
    );
  }, [filters.atividade, selectedFilters.codigoProjeto, selectedFilters.etapaProjeto]);

  const handleAtividadeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    
    if (selectedOptions.includes('todas')) {
      onFilterChange('atividade', ['todas']);
    } else {
      onFilterChange('atividade', selectedOptions);
    }
  };

  const handleTipoAtividadeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    onFilterChange('tipoAtividade', selectedOptions);
  };

  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange('codigoProjeto', e.target.value);
  };

  const isProjectSelected = Boolean(selectedFilters.codigoProjeto?.trim());

  return (
    <div className="w-64 bg-white shadow-lg min-h-screen">
      <div className="sticky top-0 p-4 space-y-4">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-5 h-5 text-gray-900" />
          <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Código Projeto
            </label>
            <select
              className="w-full border rounded-md p-2 bg-white text-gray-900 hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors"
              value={selectedFilters.codigoProjeto}
              onChange={handleProjectChange}
            >
              <option value="">Selecione um projeto</option>
              {formattedProjetos.map((projeto: ProjectCode) => (
                <option key={projeto.original} value={projeto.original}>
                  {projeto.display}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={clsx(
              "block text-sm font-medium mb-1",
              isProjectSelected ? "text-gray-700" : "text-gray-400"
            )}>
              Etapa do Projeto
            </label>
            <select
              className={clsx(
                "w-full border rounded-md p-2 transition-colors",
                isProjectSelected
                  ? "bg-white hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-900"
                  : "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed opacity-60"
              )}
              value={selectedFilters.etapaProjeto}
              onChange={(e) => onFilterChange('etapaProjeto', e.target.value as ProjectStage)}
              disabled={!isProjectSelected}
            >
              <option value="todas">Todas as etapas</option>
              {PROJECT_STAGES.filter(stage => stage !== 'todas').map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={clsx(
              "block text-sm font-medium mb-1",
              isProjectSelected ? "text-gray-700" : "text-gray-400"
            )}>
              Atividade C&C
            </label>
            <select
              multiple
              size={5}
              className={clsx(
                "w-full border rounded-md p-2 transition-colors",
                isProjectSelected
                  ? "bg-white hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-900"
                  : "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed opacity-60"
              )}
              value={selectedFilters.atividade}
              onChange={handleAtividadeChange}
              disabled={!isProjectSelected}
            >
              <option value="todas">Todas as Atividades</option>
              {filteredAtividades.map((atividade) => (
                <option key={atividade} value={atividade}>
                  {atividade}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={clsx(
              "block text-sm font-medium mb-1",
              isProjectSelected ? "text-gray-700" : "text-gray-400"
            )}>
              Classificação de Horas
            </label>
            <select
              multiple
              size={5}
              className={clsx(
                "w-full border rounded-md p-2 transition-colors",
                isProjectSelected
                  ? "bg-white hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-900"
                  : "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed opacity-60"
              )}
              value={selectedFilters.tipoAtividade}
              onChange={handleTipoAtividadeChange}
              disabled={!isProjectSelected}
            >
              {filters.tipoAtividade.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={clsx(
              "block text-sm font-medium mb-1",
              isProjectSelected ? "text-gray-700" : "text-gray-400"
            )}>
              Período
            </label>
            <div className="space-y-2">
              <input
                type="month"
                className={clsx(
                  "w-full border rounded-md p-2 transition-colors",
                  isProjectSelected
                    ? "bg-white hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-900"
                    : "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed opacity-60"
                )}
                value={periodoInicio}
                onChange={(e) => onPeriodoChange('inicio', e.target.value)}
                disabled={!isProjectSelected}
              />
              <input
                type="month"
                className={clsx(
                  "w-full border rounded-md p-2 transition-colors",
                  isProjectSelected
                    ? "bg-white hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-900"
                    : "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed opacity-60"
                )}
                value={periodoFim}
                onChange={(e) => onPeriodoChange('fim', e.target.value)}
                disabled={!isProjectSelected}
              />
            </div>
          </div>

          <div>
            <label className={clsx(
              "block text-sm font-medium mb-1",
              isProjectSelected ? "text-gray-700" : "text-gray-400"
            )}>
              Classificação de Causa
            </label>
            <select
              className={clsx(
                "w-full border rounded-md p-2 transition-colors",
                isProjectSelected
                  ? "bg-white hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-900"
                  : "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed opacity-60"
              )}
              value={selectedFilters.classificacaoCausa}
              onChange={(e) => onFilterChange('classificacaoCausa', e.target.value)}
              disabled={!isProjectSelected}
            >
              <option value="">Selecione uma Etapa</option>
              {filters.classificacaoCausa.map((causa) => (
                <option key={causa} value={causa}>
                  {causa}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};