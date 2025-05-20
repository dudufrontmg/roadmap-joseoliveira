import React from 'react';

export const Home = () => {
  return (
    <div className="mt-8 relative">
      <img
        src="/images/logotipo/Marca_Dagua_PSI.jpg"
        alt="Marca D'água PSI"
        className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none -z-10"
      />
      <div className="max-w-3xl mx-auto text-left relative z-10">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Resumo dos índices:</h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Página Inicial</span> - Retorna para a página inicial
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Handover/KoM</span> - Página para consultas e análises da transferência de responsabilidades, propostas, escopo vendido, datas de entrega e prioridades.
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Projects Now</span> - Página com resumo do escopo e andamento dos projetos
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Oportunidades</span> - Páginas para registro e consultas das oportunidades e aditivos de cada projeto
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Cronogramas</span> - Página do cronograma geral e por etapa de cada projeto
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Alocações</span> - Página para consulta e registros das alocações dos recursos C&C
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Plan&Control HH</span> - Página do Planejamento e Controle de HH (Hora Homem) mensal de cada projeto
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Dashboard</span> - Página dos gráficos das horas vendidas, planejadas, ajustadas e consumidas de cada projeto
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Portfolio</span> - Página do Portfólio do Profissional José Eduardo Oliveira
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};