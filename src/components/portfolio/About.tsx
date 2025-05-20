import React from "react";
import { CheckCircle, ChevronRight, Briefcase, User } from 'lucide-react';

export default function About({ language }) {
  const content = {
    pt: {
      title: "Sobre Mim",
      description: `Olá, me chamo José Eduardo Oliveira (conhecido como Dudu), engenheiro eletricista com MBA em Gestão de Projetos. Trabalho há anos com Sistemas de Proteção, Controle e Supervisão (SPCS) para o setor elétrico e, atualmente, atuo como Coordenador de Projetos e Gestor de Pessoas.

      Ao longo da minha trajetória, participei de projetos desafiadores que fortaleceram minhas habilidades técnicas, de gestão de projetos e pessoas, além do planejamento estratégico e da gestão de prazos. Minha abordagem é prática e organizada, sempre buscando eficiência e bons resultados.
      
      Acredito que um ambiente colaborativo é essencial para o sucesso da equipe. Por isso, procuro incentivar o crescimento dos profissionais ao meu redor e resolver desafios de forma objetiva.
      
      Estou sempre me atualizando para acompanhar as evoluções do setor elétrico e da automação, contribuindo para projetos inovadores. Meu objetivo é desenvolver soluções eficientes que superem as expectativas dos clientes.`,
      whatIDo: "O que eu faço",
      description2: `Coordeno projetos de SPCS desde o handover com a equipe de vendas e o kick-off com o cliente até a transferência para o pós-vendas. Acompanho todas as etapas do ciclo de vida do projeto, garantindo entregas eficientes e alinhadas às necessidades do cliente.
      
      Também sou responsável pela gestão de uma equipe de seis engenheiros, assegurando a organização, o desenvolvimento profissional e a execução estratégica dos projetos.`,
      areas: [
        {
          "title": "Gestão Macro Processos",
          "icon": "Briefcase",
          "items": [
            {
              "subtitle": "Fase Planejamento e Desenvolvimento:",
              "subitems": [
                "Handover/Vendas x PM/CT/LT",
                "Kick-off com Cliente",
                "Planejamento Detalhado",
                "Desenvolvimento",
                "Fabricação"
              ]
            },
            {
              "subtitle": "Fase Testes e Integração:",
              "subitems": [
                "Parametrização",
                "Pré TAF",
                "TAF",
                "Expedição",
                "Montagem/Instalação campo",
                "TAC/Comissionamento"
              ]
            },
            {
              "subtitle": "Fase Encerramento e Garantia:",
              "subitems": [
                "Aceitação TAC",
                "Operação Assistida (quando houver)",
                "Encerramento do Projeto",
                "Passagem Pós-Venda",
                "Finalização Garantia"
              ]
            }
          ]
        },
        {
          "title": "Engenharia Aplicada e Suporte Estratégico",
          "icon": "User",
          "items": [
            {
              "subtitle": "Atividades Principais",
              "subitems": [
                "Visita técnica em campo",
                "Levantamento e mitigação dos riscos e desvios do escopo",
                "Elaboração/Aprovação do Workstatements",
                "Cronograma Macro do Projeto",
                "Cronograma Detalhado do Projeto",
                "Cadastramento do Projeto no Sistema",
                "Follow-ups (Clientes, Fornecedores e Áreas Internas)",
                "Solicitações de alocações de recursos",
                "Planejamento e Cronogramas detalhado de campo",
                "Aprovação de Lista BOM",
                "Envio e análise de Propostas (Terceiros e Fornecedores)",
                "Soluções Inovadoras para Otimização de Processos Internos"
              ]
            },
            {
              "subtitle": "Suporte/Apoio às áreas:",
              "subitems": [
                "Gestão do Projeto",
                "Comercial/Vendas",
                "Engenharia",
                "Compras/Suprimentos",
                "Planejamento",
                "Fábrica",
                "C&C - equipes de campo"
              ]
            }
          ]
        }
      ]
    },
    en: {
      title: "About Me",
      description: `Hello, my name is José Eduardo Oliveira (also known as Dudu). I am an electrical engineer with an MBA in Project Management. I have been working for years with Protection, Control, and Supervision Systems (SPCS) for the energy sector, and I currently serve as a Project Coordinator and People Manager.
      
      Throughout my career, I have taken part in challenging projects that have strengthened my technical expertise, project and people management skills, as well as strategic planning and deadline management. My approach is practical and organized, always aiming for efficiency and solid results.
      
      I believe that a collaborative environment is key to a team's success. That is why I strive to foster professional growth and solve challenges in a clear and objective way.

      I am constantly updating my knowledge to keep up with advancements in the energy and automation sectors, contributing to innovative projects. My goal is to develop efficient solutions that exceed client expectations.`,
      whatIDo: "What I Do",
      description2: `I coordinate SPCS projects from the handover with the sales team and the project kick-off with the client to the final transfer to after-sales support. I oversee all stages of the project lifecycle, ensuring efficient deliveries aligned with client needs.
      
      I am also responsible for managing a team of six engineers, ensuring organization, professional development, and the strategic execution of projects.`,
      areas: [
        {
          "title": "Macro Process Management",
          "icon": "Briefcase",
          "items": [
            {
              "subtitle": "Planning and Development Phase:",
              "subitems": [
                "Handover (Sales ↔ PM/CT/LT)",
                "Kick-off with the Client",
                "Detailed Planning",
                "Development",
                "Manufacturing"
              ]
            },
            {
              "subtitle": "Testing and Integration Phase:",
              "subitems": [
                "Parameterization",
                "Pre-TAF",
                "TAF",
                "Shipping",
                "Assembly/Field Installation",
                "TAC/Commissioning"
              ]
            },
            {
              "subtitle": "Closure and Warranty Phase:",
              "subitems": [
                "TAC Acceptance",
                "Assisted Operation (if applicable)",
                "Project Closure",
                "Handover to After-Sales Support",
                "Warranty Completion"
              ]
            }
          ]
        },
        {
          "title": "Applied Engineering and Strategic Support",
          "icon": "User",
          "items": [
            {
              "subtitle": "Main Activities",
              "subitems": [
                "On-Site Technical Visits",
                "Scope Risk Assessment and Mitigation",
                "Workstatement Development/Approval",
                "Project Macro Schedule",
                "Detailed Project Schedule",
                "Project Registration in the System",
                "Follow-ups (Clients, Suppliers, and Internal Teams)",
                "Resource Allocation Requests",
                "Field Planning and Detailed Schedules",
                "BOM List Approval",
                "Proposal Submission and Analysis",
                "Innovative Solutions for Process Optimization"
              ]
            },
            {
              "subtitle": "Support Areas:",
              "subitems": [
                "Project Management",
                "Sales & Commercial",
                "Engineering",
                "Procurement & Supply Chain",
                "Planning",
                "Manufacturing",
                "C&C - Field Teams"
              ]
            }
          ]
        }
      ]
    }
  };

  const text = content[language];
  const IconComponent = {
    Briefcase,
    User
  };

  return (
    <article className="space-y-12">
      <header className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          {text.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
      </header>

      <section className="space-y-8">
        <div className="prose prose-invert max-w-none">
          <div className="whitespace-pre-line leading-relaxed">{text.description}</div>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-emerald-400 mt-12">{text.whatIDo}</h3>
          <p className="text-gray-300 whitespace-pre-line leading-relaxed">{text.description2}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {text.areas.map((area, index) => {
            const Icon = IconComponent[area.icon];
            return (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-emerald-500/10 rounded-xl">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-2xl font-semibold text-emerald-400">{area.title}</h4>
                </div>
                
                <div className="space-y-6">
                  {area.items.map((item, idx) => (
                    <div key={idx} className="space-y-3">
                      <h5 className="text-lg font-medium text-gray-300 flex items-center gap-2">
                        <ChevronRight className="w-5 h-5 text-emerald-400" />
                        {item.subtitle}
                      </h5>
                      <ul className="space-y-2 ml-6">
                        {item.subitems.map((subitem, subIdx) => (
                          <li key={subIdx} className="flex items-center gap-3 text-gray-400">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span>{subitem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}