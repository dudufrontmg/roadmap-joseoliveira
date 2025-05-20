import React from "react";
import { Github, ExternalLink, Code, Cpu, Database, LineChart, Wrench, CheckCircle, Monitor, FileText, Facebook as Robot } from "lucide-react";

export default function SideProjects({ language }) {
  const content = {
    pt: {
      title: "Projetos Paralelos",
      description:
        "Uma coleção dos meus projetos pessoais e profissionais em desenvolvimento de software.",
      categories: {
        automation: "Automação",
        analysis: "Análise de Dados",
        development: "Desenvolvimento",
      },
      projects: [
        {
          title: "Portfolio",
          category: "development",
          description:
            "Desenvolvimento e programação de um portfólio profissional moderno, inovador e otimizado para destacar habilidades e projetos pessoais e profissionais",
          technologies: ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Tailwind CSS", "Vite"],
          features: [
            "Design adaptável para todos dispositivos com acesso a internet",
            "Interface moderna e otimizada para experiência do usuário (UX/UI)",
            "Seção interativa para exibição de projetos e habilidades",
            "Animações e transições suaves para uma navegação dinâmica",
            "Integração com redes sociais e plataformas profissionais",
            "Tema personalizável com opções de cores e fontes",
            "Deploy automatizado para atualizações contínuas"
          ],
          icon: Monitor,
          github: "https://portfolio-joseeoliveira.netlify.app/",
          status: "Concluído",
        },
        {
          title: "Dashboards dos Projetos",
          category: "analysis",
          description:
            "Dashboard interativo para análise de dados dos projetos SPCS, oferecendo insights sobre horas vendidas, planejadas e consumidas, além de saldo, desvios e variações, tanto globalmente quanto por atividade.",
          technologies: ["Python", "Streamlit", "Pandas", "Plotly", "Openpyxl"],
          features: [
            "Visualização de Gráficos Automatizados",
            "Análise de tendências",
            "Indicadores KPI",
            "Relatórios interativos",
            "Integração com múltiplas fontes de dados"
          ],
          icon: LineChart,
          github: "https://github.com/dudufrontmg/SideProjects",
          status: "Em Desenvolvimento",
        },
        {
          title: "Robo CentOS SAGE AutoSetup",
          category: "automation",
          description:
            "Automação com Script executável (.bash) com menu interativo para configurações automatizadas do sistema SCADA SAGE no Linux CentOS, permitindo ajustes personalizados conforme a necessidade.",
          technologies: [".bash", "VMWare", "Linux CentOS"],
          features: [
            "Automação de configurações",
            "Guia de Configurações padrões",
            "Otimização de tempo"
          ],
          icon: Cpu,
          github: "https://github.com/dudufrontmg/SideProjects",
          status: "Concluído",
        },
        {
          title: "Formulários e Checklists",
          category: "automation",
          description:
            "Automação de documentações preenchíveis em PDF a partir de arquivos .odt, facilitando a inserção e padronização de dados e assinaturas digitais.",
          technologies: [".ODT", ".PDF", "LibreOffice", "Excel"],
          features: [
            "Checklist Parametrização, PTAF, TAF e TAC",
            "Checklist Pré-TAC/Mobilização",
            "Checklist TAC/Pré-Energização",
            "Certificado de Testes",
            "CEB Controle padronizado de envio da backups ao servidor do projeto",
            "Integração do Gestão com novo Colaborador",
            "Aplicação de boas práticas para padronização e segurança",
            "Assinatura digital e controle de versões para auditoria",
            "Gestão para análise de desempenho"
          ],
          icon: FileText,
          github: "https://github.com/dudufrontmg/SideProjects",
          status: "Concluído",
        },
        {
          title: "Robo controlado remotamente",
          category: "automation",
          description:
            "Desenvolvimento, fabricação e automação de um robô controlado remotamente",
          technologies: [".INO", "Arduino UNO", "Shields Arduino", "Eletromecânica"],
          features: [
            "Trabalho de Conclusão de Curso (TCC)",
            "Controle remoto via interface",
            "Sensores de movimento e proximidade",
            "Sistema de tração independente",
            "Comunicação sem fio"
          ],
          icon: Robot,
          github: "https://github.com/dudufrontmg/SideProjects",
          status: "Concluído",
        }
      ],
    },
    en: {
      title: "Side Projects",
      description:
        "A collection of my personal and professional software development projects.",
      categories: {
        automation: "Automation",
        analysis: "Data Analysis",
        development: "Development",
      },
      projects: [
        {
          title: "Portfolio",
          category: "development",
          description:
            "Development and programming of a modern, innovative, and optimized professional portfolio to highlight personal and professional skills and projects",
          technologies: ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Tailwind CSS", "Vite"],
          features: [
            "Responsive design for all internet-enabled devices",
            "Modern interface optimized for user experience (UX/UI)",
            "Interactive section for projects and skills display",
            "Smooth animations and transitions for dynamic navigation",
            "Integration with social networks and professional platforms",
            "Customizable theme with color and font options",
            "Automated deployment for continuous updates"
          ],
          icon: Monitor,
          github: "https://portfolio-joseeoliveira.netlify.app/",
          status: "Completed",
        },
        {
          title: "Project Dashboards",
          category: "analysis",
          description:
            "Interactive dashboard for PCSS project data analysis, providing insights on sold, planned, and consumed hours, as well as balance, deviations, and variations, both globally and by activity.",
          technologies: ["Python", "Streamlit", "Pandas", "Plotly", "Openpyxl"],
          features: [
            "Automated Chart Visualization",
            "Trend Analysis",
            "KPI Indicators",
            "Interactive Reports",
            "Multiple Data Source Integration"
          ],
          icon: LineChart,
          github: "https://github.com/dudufrontmg/SideProjects",
          status: "In Development",
        },
        {
          title: "CentOS SAGE AutoSetup Robot",
          category: "automation",
          description:
            "Automation with executable script (.bash) with interactive menu for automated SCADA SAGE system configurations on Linux CentOS, allowing customized adjustments as needed.",
          technologies: [".bash", "VMWare", "Linux CentOS"],
          features: [
            "Configuration Automation",
            "Standard Configuration Guide",
            "Time Optimization"
          ],
          icon: Cpu,
          github: "https://github.com/dudufrontmg/SideProjects",
          status: "Completed",
        },
        {
          title: "Forms and Checklists",
          category: "automation",
          description:
            "Automation of fillable PDF documentation from .odt files, facilitating data insertion and standardization and digital signatures.",
          technologies: [".ODT", ".PDF", "LibreOffice", "Excel"],
          features: [
            "Parameterization, PTAF e TAF Checklist",
            "Pre-TAC/Mobilization Checklist",
            "TAC/Pre-Energization Checklist",
            "Test Certificate",
            "CEB Standardized Control for Project Server Backup Submission",
            "Management Integration with New Employee",
            "Application of Best Practices for Standardization and Security",
            "Digital Signature and Version Control for Auditing",
            "Management for Performance Analysis"
          ],
          icon: FileText,
          github: "https://github.com/dudufrontmg/SideProjects",
          status: "Completed",
        },
        {
          title: "Remotely Controlled Robot",
          category: "automation",
          description:
            "Development, manufacturing, and automation of a remotely controlled robot",
          technologies: [".INO", "Arduino UNO", "Arduino Shields", "Electromechanics"],
          features: [
            "Final Course Project (TCC)",
            "Remote control via interface",
            "Motion and proximity sensors",
            "Independent traction system",
            "Wireless communication"
          ],
          icon: Robot,
          github: "https://github.com/dudufrontmg/SideProjects",
          status: "Completed",
        }
      ],
    },
  };

  const text = content[language];

  const getStatusColor = (status) => {
    if (status === "Concluído" || status === "Completed") {
      return "bg-green-500/20 text-green-300";
    }
    if (status === "Em Desenvolvimento" || status === "In Development") {
      return "bg-yellow-500/20 text-yellow-300";
    }
    return "bg-blue-500/20 text-blue-300";
  };

  return (
    <article className="space-y-12">
      <header className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          {text.title}
        </h2>
        <p className="text-xl text-gray-300">{text.description}</p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {text.projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl">
                  <project.icon className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                </div>
                <h3 className="text-2xl font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="flex space-x-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-emerald-500/10 rounded-full transition-colors"
                  title="View Project"
                >
                  {project.title === "Portfolio" ? (
                    <ExternalLink
                      size={20}
                      className="text-emerald-400 group-hover:text-emerald-300 transition-colors"
                    />
                  ) : (
                    <Github
                      size={20}
                      className="text-emerald-400 group-hover:text-emerald-300 transition-colors"
                    />
                  )}
                </a>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Code className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  <h4 className="text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    Technologies
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-emerald-500/10 text-sm rounded-full text-emerald-400 group-hover:text-emerald-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Wrench className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  <h4 className="text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    Features
                  </h4>
                </div>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-400 group-hover:text-emerald-300 transition-colors flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <span className="text-sm text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {text.categories[project.category]}
                </span>
                <span className={`px-4 py-2 rounded-full text-sm ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}