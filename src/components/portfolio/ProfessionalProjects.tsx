import React from "react";
import { Building2, Calendar, ArrowUpRight } from "lucide-react";

interface ProfessionalProjectsProps {
  language: string;
}

const ProfessionalProjects: React.FC<ProfessionalProjectsProps> = ({ language }) => {
  const content = {
    pt: {
      title: "Projetos Profissionais (SPCS)",
      description:
        "Projetos significativos em Sistemas de Proteção, Controle e Supervisão (SPCS) que liderei e contribuí.",
      projects: [
        {
          title: "SE São José dos Campos [24_173 e 24_237]",
          period: "FEV 2025 - Presente",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reformas e Melhorias",
          scope: "Retrofit da Proteção, Controle, Supervisão e Telecomunicações",
          details: "3x TR's 230/88kV, 2x Paralelo 230kV + 88kV, IHM SCADA e Telecom Fronteira",
          status: "🚀 Em andamento",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Tietê [24_175 e 24_238]",
          period: "FEV 2025 - Presente",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reformas e Melhorias",
          scope: "Retrofit da Proteção, Controle, Supervisão e Telecomunicações",
          details: "2x TR's 138/13,8kV, 1x Serviço Auxiliar - QDCC 125VCC, IHM SCADA e Telecom Fronteira",
          status: "🚀 Em andamento",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Bragança Paulista [24_177 e 24_239]",
          period: "FEV 2025 - Presente",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reformas e Melhorias",
          scope: "Retrofit da Proteção, Controle, Supervisão e Telecomunicações",
          details: "1x TR 138/34,5kV, IHM SCADA e Telecom Fronteira",
          status: "🚀 Em andamento",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE São José do Rio Preto [24_281 e 24_332]",
          period: "FEV 2025 - Presente",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reformas e Melhorias",
          scope: "Retrofit da Proteção, Controle, Supervisão, Telecomunicações e Teleproteção",
          details: "2x LT's C1 e C2 138kV, Sistema de Teleproteção, IHM SCADA e Telecom Fronteira",
          status: "🚀 Em andamento",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Catanduva [24_281 e 24_332]",
          period: "FEV 2025 - Presente",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reformas e Melhorias",
          scope: "Retrofit da Proteção, Controle, Supervisão, Telecomunicações e Teleproteção",
          details: "2x LT's C1 e C2 138kV, Sistema de Teleproteção, IHM SCADA e Telecom Fronteira",
          status: "🚀 Em andamento",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Água Vermelha [24_139]",
          period: "Set 2024 - Presente",
          company: "PSI - Process Soluções Inteligentes",
          type: "Retrofit/Lote 9",
          scope: "Retrofit do SSCL - Sistema de Supervisão e Controle Local (SCADA) e Telecom. Fronteira",
          status: "🚀 Em andamento",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Ribeirão Preto 14 California [24_064/065]",
          period: "Ago 2024 - Presente",
          company: "PSI - Process Soluções Inteligentes",
          type: "Construção de Subestação Nova",
          scope: "Turn-key (SPCS e EPC)",
          details: "Setor 138kV: 2x LTs, 1x Paralelo, 2x TRs, Barras dupla, Saux CC/CA, SSD/IHM, Telecom Fronteira, MF e CFTV.\nSetor 13,8kV: 10x ALs, 2x TIE, 2x TRs, 1x Int. BR e Barras.",
          status: "🚀 Em andamento",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SEs Mogi Mirim 3 e Santa Bárbara do Oeste [24_098]",
          period: "Jun 2024 - Presente",
          company: "PSI - Process Soluções Inteligentes",
          type: "Regional - Modernização STD",
          scope: "Turn-key - Substituição dos SRA por Controle Digital",
          details: "SE MOM3: 4x LTs 138kV\nSE SBO: 10x LTs, 2x Paralelo e 2x Interligador 138kV",
          status: "🚀 Em andamento",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SEs Neves 1 e Mesquita [23_042]",
          period: "Jun 2023 - Presente",
          company: "PSI - Process Soluções Inteligentes",
          type: "Expansão Nacional - Reformas e Melhorias",
          scope: "Turn-key - Retrofit do SSCL (Sistema de Supervisão e Controle Local - SCADA)",
          status: "🚀 Em andamento",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Chavantes [PCS_20_304]",
          period: "Dez 2020 - Presente",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reformas e Melhorias",
          scope: "Retrofit da Proteção e Controle",
          details: "Bays: 2x Trafos 88/230kV e 1x LT 230kV",
          status: "🚀 Em andamento",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Jupiá [PCS_20_305]",
          period: "Dez 2020 - Presente",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reformas e Melhorias",
          scope: "Retrofit da Proteção, Controle e Supervisão",
          details: "Setor 138kV: 8x LTs, 2x Paralelo, 2x TRs 138/13,8kV, 1x TR 440/138kV\nSetor 440kV: 1x TR 440/138kV",
          status: "🚀 Em andamento",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Taubaté [PCS_20_297 e 20_307]",
          period: "Dez 2020 - Presente",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reformas e Melhorias",
          scope: "Retrofit da Proteção, Controle e Supervisão",
          details: "Setor 138kV: 6x LTs, 2x Paralelo, 3x TRs 138/440kV, 1x TR 138/13,8kV e Barras dupla\nSetor 440kV: 1x LT, 2x Central, 3x TRs 138/440kV, 1x TR 440/500kV e Barras.\nSetor 500kV: 2x LTs, 1x TR 440/500kV e Barras.",
          status: "🚀 Em andamento",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Ribeiro Gonçalves [23_090]",
          period: "Jan 2024 - Nov 2024",
          company: "PSI - Process Soluções Inteligentes",
          type: "Expansão Nacional - Reformas e Melhorias",
          scope: "Turn-key - Retrofit e ampliação do Serviço Auxiliar",
          status: "✅ Concluído",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "Arinos PV Plant [23_018]",
          period: "Jun 2023 - Nov 2023",
          company: "PSI - Process Soluções Inteligentes",
          type: "Field Service",
          scope: "Field Service",
          status: "✅ Concluído",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
      ],
    },
    en: {
      title: "Professional Projects (PCSS)",
      description:
        "Significant Protection, Control and Supervision Systems (PCSS) projects that I've led and contributed to.",
      projects: [
        {
          title: "SE São José dos Campos [24_173 and 24_237]",
          period: "FEB 2025 - Present",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reforms and Improvements",
          scope: "Protection, Control, Supervision and Telecommunications Retrofit",
          details: "3x 230/88kV TRs, 2x 230kV + 88kV Parallel, HMI SCADA and Border Telecom",
          status: "🚀 In Progress",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Tietê [24_175 and 24_238]",
          period: "FEB 2025 - Present",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reforms and Improvements",
          scope: "Protection, Control, Supervision and Telecommunications Retrofit",
          details: "2x 138/13.8kV TRs, 1x Auxiliary Service - 125VDC DCCP, HMI SCADA and Border Telecom",
          status: "🚀 In Progress",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Bragança Paulista [24_177 and 24_239]",
          period: "FEB 2025 - Present",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reforms and Improvements",
          scope: "Protection, Control, Supervision and Telecommunications Retrofit",
          details: "1x 138/34.5kV TR, HMI SCADA and Border Telecom",
          status: "🚀 In Progress",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE São José do Rio Preto [24_281 and 24_332]",
          period: "FEB 2025 - Present",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reforms and Improvements",
          scope: "Protection, Control, Supervision, Telecommunications and Teleprotection Retrofit",
          details: "2x 138kV C1 and C2 TLs, Teleprotection System, HMI SCADA and Border Telecom",
          status: "🚀 In Progress",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Catanduva [24_281 and 24_332]",
          period: "FEB 2025 - Present",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reforms and Improvements",
          scope: "Protection, Control, Supervision, Telecommunications and Teleprotection Retrofit",
          details: "2x 138kV C1 and C2 TLs, Teleprotection System, HMI SCADA and Border Telecom",
          status: "🚀 In Progress",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Água Vermelha [24_139]",
          period: "Sep 2024 - Present",
          company: "PSI - Process Soluções Inteligentes",
          type: "Retrofit/Lot 9",
          scope: "LCSS Retrofit - Local Control and Supervision System (SCADA) and Telecom. Border",
          status: "🚀 In Progress",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Ribeirão Preto 14 California [24_064/065]",
          period: "Aug 2024 - Present",
          company: "PSI - Process Soluções Inteligentes",
          type: "New Substation Construction",
          scope: "Turn-key (PCSS and EPC)",
          details: "138kV Sector: 2x TLs, 1x Parallel, 2x TRs, Double Bars, Aux DC/AC, DAS/HMI, Border Telecom, MF and CCTV.\n13.8kV Sector: 10x FLs, 2x TIE, 2x TRs, 1x BR Int. and Bars.",
          status: "🚀 In Progress",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SEs Mogi Mirim 3 and Santa Bárbara do Oeste [24_098]",
          period: "Jun 2024 - Present",
          company: "PSI - Process Soluções Inteligentes",
          type: "Regional - STD Modernization",
          scope: "Turn-key - Replacement of SRA with Digital Control",
          details: "SE MOM3: 4x 138kV TLs\nSE SBO: 10x TLs, 2x Parallel and 2x Interconnector 138kV",
          status: "🚀 In Progress",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SEs Neves 1 and Mesquita [23_042]",
          period: "Jun 2023 - Present",
          company: "PSI - Process Soluções Inteligentes",
          type: "National Expansion - Reforms and Improvements",
          scope: "Turn-key - LCSS Retrofit (Local Control and Supervision System - SCADA)",
          status: "🚀 In Progress",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Chavantes [PCS_20_304]",
          period: "Dec 2020 - Present",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reforms and Improvements",
          scope: "Protection and Control Retrofit",
          details: "Bays: 2x 88/230kV Transformers and 1x 230kV TL",
          status: "🚀 In Progress",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Jupiá [PCS_20_305]",
          period: "Dec 2020 - Present",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reforms and Improvements",
          scope: "Protection, Control and Supervision Retrofit",
          details: "138kV Sector: 8x TLs, 2x Parallel, 2x 138/13.8kV TRs, 1x 440/138kV TR\n440kV Sector: 1x 440/138kV TR",
          status: "🚀 In Progress",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Taubaté [PCS_20_297 and 20_307]",
          period: "Dec 2020 - Present",
          company: "PSI - Process Soluções Inteligentes",
          type: "Reforms and Improvements",
          scope: "Protection, Control and Supervision Retrofit",
          details: "138kV Sector: 6x TLs, 2x Parallel, 3x 138/440kV TRs, 1x 138/13.8kV TR and Double Bars\n440kV Sector: 1x TL, 2x Central, 3x 138/440kV TRs, 1x 440/500kV TR and Bars.\n500kV Sector: 2x TLs, 1x 440/500kV TR and Bars.",
          status: "🚀 In Progress",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "SE Ribeiro Gonçalves [23_090]",
          period: "Jan 2024 - Nov 2024",
          company: "PSI - Process Soluções Inteligentes",
          type: "National Expansion - Reforms and Improvements",
          scope: "Turn-key - Retrofit and expansion of Auxiliary Service",
          status: "✅ Completed",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
        {
          title: "Arinos PV Plant [23_018]",
          period: "Jun 2023 - Nov 2023",
          company: "PSI - Process Soluções Inteligentes",
          type: "Field Service",
          scope: "Field Service",
          status: "✅ Completed",
          link: "https://www.linkedin.com/in/jnoliveira/details/projects/",
        },
      ],
    },
  };

  const text = content[language];

  const getStatusColor = (status) => {
    if (status.includes("Concluído") || status.includes("Completed")) {
      return "bg-green-500/20 text-green-300";
    }
    return "bg-yellow-500/20 text-yellow-300"; // For "Em andamento" / "In Progress"
  };

  return (
    <article className="space-y-12">
      <header className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          {text.title}
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">{text.description}</p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {text.projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-emerald-500/10 rounded-full transition-colors"
              >
                <ArrowUpRight
                  size={20}
                  className="text-emerald-400 group-hover:text-emerald-300 transition-colors"
                />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Calendar className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <span>{project.period}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Building2 className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <span>{project.company}</span>
              </div>
            </div>

            <div className="space-y-3 text-gray-300">
              <p className="flex items-center space-x-2">
                <strong className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {language === "pt" ? "Tipo:" : "Type:"}
                </strong>
                <span>{project.type}</span>
              </p>
              <p className="flex items-center space-x-2">
                <strong className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {language === "pt" ? "Escopo:" : "Scope:"}
                </strong>
                <span>{project.scope}</span>
              </p>
              {project.details && (
                <p className="flex items-start space-x-2">
                  <strong className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {language === "pt" ? "Detalhes:" : "Details:"}
                  </strong>
                  <span className="whitespace-pre-line">{project.details}</span>
                </p>
              )}
            </div>

            <div className="mt-6">
              <span className={`px-4 py-2 rounded-full text-sm ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ProfessionalProjects;