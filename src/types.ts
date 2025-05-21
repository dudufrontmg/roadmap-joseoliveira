// Dados vindos de Projetos_em_Horas.xlsx
export interface ProjetoExcelData {
  'Cod Projeto': string;
  'Descrição do Projeto': string;
  'Descrição do Item': string;
  'Hs Orçadas': number;
  'Hs Programadas': number;
  'Hs Ajustadas': number;
  'Hs Executadas': number;
  'Hs Saldo': number;
}

// Dados vindos de Horas_Detalhadas.xlsx
export interface HorasDetalhadasData {
  'Código do Projeto': string;
  'Ano-Mês': string;
  'Data Apontamento': string;
  'Descrição da Atividade': string;
  'Descrição Tipo Atividade': string;
  'Total Horas': string;
  'Horas Decimal': number;
}

// Filtros selecionados pelo usuário
export interface FilterState {
  codigoProjeto: string;
  etapaProjeto: ProjectStage;
  atividade: string[];
  tipoAtividade: string[];
  periodoInicio: string;
  periodoFim: string;
  classificacaoCausa: string;
}

// Valores disponíveis para filtros
export interface FilterOptions {
  codigoProjeto: string[];
  atividade: string[];
  tipoAtividade: string[];
  classificacaoCausa: string[];
}

// Dados das causas
export interface CauseData {
  CODIGOS: string;
  'ETAPA PROJETO': string;
  CAUSA: string;
  'HORA 1': number;
  'CAUSA 1': string;
  'HORA 2': number;
  'CAUSA 2': string;
  'HORA 3': number;
  'CAUSA 3': string;
  'HORA 4': number;
  'CAUSA 4': string;
  'HORA 5': number;
  'CAUSA 5': string;
  'DIF HORA TOT': number;
}

// Dados da tabela de causas
export interface CauseTableData {
  id: number;
  description: string;
  horas: number;
}

export interface CauseTableRow {
  CODIGOS: string;
  'ETAPA PROJETO': string;
  'ETAPA CAUSA': string;
  MOTIVOS: string;
}

// Gráfico de causas
export interface CauseChartData {
  name: string;
  horas: number;
  variacao: number;
}

// Métricas das causas
export interface CauseMetrics {
  etapaSelecionada: string;
  variacao: number;
  diferencaHoras: number;
}

// Categorias e etapas
export type ActivityCategory = 
  | 'Visita Técnica'
  | 'Parametrização'
  | 'PTAF'
  | 'TAF'
  | 'TAC'
  | 'Técnico Campo'
  | 'Outros';

export type ProjectStage = 
  | 'todas'
  | 'Parametrização'
  | 'PTAF'
  | 'TAF'
  | 'Técnico Campo'
  | 'TAC';

// Códigos para o dropdown de projeto
export interface ProjectCode {
  original: string;
  display: string;
}