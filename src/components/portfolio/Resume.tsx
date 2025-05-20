import React from "react";
import { Briefcase, GraduationCap, BookOpen, Calendar, Building2, CheckCircle } from "lucide-react";

export default function Resume({ language }) {
  const content = {
    pt: {
      title: "Currículo",
      experience: "Experiência Profissional",
      education: {
        title: "Formação Acadêmica",
        items: [
          {
            degree: "MBA em Gestão de Projetos",
            institution: "Universidade de São Paulo (USP)",
            period: "2021 - 2023",
          },
          {
            degree: "Bacharel em Engenharia Elétrica - Eletrônica",
            institution: "Centro Universitário de Rio Preto (Unirp)",
            period: "2010 - 2015",
          },
          {
            degree: "Técnico em Eletrônica",
            institution: "Escola Técnica Curso Nobre",
            period: "2005 - 2007",
          },
        ],
      },
      courses: {
        title: "Cursos Complementares",
        items: [
          {
            name: "eXPert Development Tools - Sdi RTU, Sdi The Power Of Automation",
            institution: "PSI - Process Soluções Inteligentes",
            year: "2019",
          },
          {
            name: "Treinamento na UTR STD-7100",
            institution: "PSI - Process Soluções Inteligentes",
            year: "2021",
          },
          {
            name: "Treinamento SCADA SPIN ActionView",
            institution: "PSI - Process Soluções Inteligentes",
            year: "2022",
          },
          {
            name: "Treinamento SCADA SAGE CentOS 6.8",
            institution: "PSI - Process Soluções Inteligentes",
            year: "2018",
          },
          {
            name: "Treinamento Controladora Alstom C264",
            institution: "PSI - Process Soluções Inteligentes",
            year: "2018",
          },
          {
            name: "Power BI completo do básico ao avançado",
            year: "2023",
          },
          {
            name: "Proteção e Controle de Sistemas Elétricos de Potência",
            year: "2019",
          },
          {
            name: "Descobrindo Python",
            year: "2023",
          },
          {
            name: "Completo Shell Script",
            year: "2022",
          },
          {
            name: "NR 10 SEP",
            institution: "PSI - Process Soluções Inteligentes",
            year: "2018",
          },
          {
            name: "MS Excel - Avançado",
            year: "2015",
          },
          {
            name: "Máquinas Elétricas",
            year: "2016",
          },
          {
            name: "Instalações e Projetos em Sistemas Fotovoltaicos",
            year: "2016",
          },
          {
            name: "Comandos Elétricos",
            year: "2016",
          },
          {
            name: "CCNA 1 Networking Basics",
            year: "2008",
          },
        ],
      },
      jobs: [
        {
          title: "Coordenador de Projetos SPCS e Gestão de Pessoas",
          company: "PSI - Process Soluções Inteligentes",
          period: "2021 - Presente",
          description: [
            "Lidero projetos de Sistemas de Proteção, Controle e Supervisão (SPCS) em subestações de energia",
            "Realizo follow-ups internos e externos, garantindo alinhamento entre clientes, fornecedores e áreas da empresa",
            "Desenvolvo, acompanho e atualizo cronogramas detalhados para garantir a execução eficiente",
            "Planejo e controlo horas-homem (HH) e recursos, gerenciando equipes internas e parceiros terceirizados",
            "Forneço suporte técnico contínuo para equipes de campo, auxiliando na resolução de desafios técnicos",
            "Coordeno revisões e aprovações de Bill of Materials (BOM), assegurando conformidade com requisitos técnicos",
            "Participo do desenvolvimento de workstatements, análise de propostas e especificações técnicas conforme o escopo contratual",
          ],
        },
        {
          title: "Engenheiro de Sistemas de Controle e Supervisão Sênior",
          company: "PSI - Process Soluções Inteligentes",
          period: "2019 - 2021",
          description: [
            "Responsável pela parametrização, implantação e execução das etapas TAF e TAC em projetos de SPCS",
            "Atividades incluem configurações de redes industriais PRP/HSR e RSTP para garantir desempenho, interoperabilidade e confiabilidade, além de integrações e testes entre os sistemas de supervisão, controle e proteção com os principais protocolos e normas, como IEC 61850 (MMS, GOOSE e Simple Value), 60870-5-101/104, 60870-6 ICCP/TASE.2, IEEE 1815-2012 (DNP3), Modbus, SNMP e sincronismo de tempo (PTP, NTP/SNTP e IRIG-B)",
            "Acompanhamento de start-up do ativo",
          ],
        },
        {
          title: "Projetista",
          company: "HIPARC Geotecnologia, Projetos e Aerolevantamentos",
          period: "2017 - 2018",
          description: ["Projeto 852 da Eletrobrás Furnas - UHE de Marimbondo"],
        },
        {
          title: "Técnico Eletromecânico Sr.",
          company: "JBS",
          period: "2016 - 2017",
          description: [
            "Responsável por instalações e manutenções preventivas e corretivas em sistemas e equipamentos industriais, incluindo cubículo de 13,8 kV, CCMs, caldeiras, máquinas e equipamentos elétricos e eletrônicos",
            "Realizações de ensaios, troca e configuração de dispositivos de comunicação, controle e proteção, como inversores de frequência, soft-starts, relés e PLCs",
            "Leitura e interpretação de projetos de comando e força. Apoio à operação, executando atividades locais relacionadas a impedimento, acionamento e liberação de equipamentos seguindo os procedimentos de segurança",
          ],
        },
        {
          title: "Estagiário de Engenharia Elétrica",
          company: "Furnas Centrais Elétrica S/A",
          period: "2014 - 2014",
          description: [
            "Acompanhamento de manutenções em circuitos de proteção, controle e supervisão de usinas e subestações",
            "Observação de ensaios em IED MiCOM P443, troca de válvulas de disjuntores DJ9132 e atualização de diagramas esquemáticos",
            "Apoio na troca de capacitores do sistema de excitação",
          ],
        },
      ],
    },
    en: {
      title: "Resume",
      experience: "Professional Experience",
      education: {
        title: "Academic Background",
        items: [
          {
            degree: "MBA in Project Management",
            institution: "University of São Paulo",
            period: "2021 - 2023",
            details: [
              "Differentiate between predictive and adaptive/agile approaches and combine them when necessary",
              "Apply approaches and tools consistent with project nature",
              "Manage projects from start to finish",
              "Enhance self-awareness, emotional management and interpersonal relationships",
              "Promote change and manage conflicts",
              "Build and manage high-performance project teams",
              "Have business vision and make decisions coherent with organizational and project context",
            ],
          },
          {
            degree: "Bachelor in Electrical Engineering - Electronics",
            institution: "Rio Preto University Center",
            period: "2010 - 2015",
            details: [
              "XI Scientific Congress - 'Development of a remotely controlled ground robot' (2014)",
              "IX Forum of Exact and Technological Sciences, Unirp (2011)",
              "VI Meeting of Exact Sciences Course Alumni at Unirp (2011)",
            ],
          },
          {
            degree: "Electronics Technician",
            institution: "Curso Nobre Technical School",
            period: "2005 - 2007",
            details: ["Supervised Internship in Electronics (2006)"],
          },
        ],
      },
      courses: {
        title: "Complementary Courses",
        items: [
          {
            name: "eXPert Development Tools - Sdi RTU, Sdi The Power Of Automation",
            institution: "PSI - Process Soluções Inteligentes",
            year: "2019",
          },
          {
            name: "UTR STD-7100 Training",
            institution: "PSI - Process Soluções Inteligentes",
            year: "2021",
          },
          {
            name: "SCADA SPIN ActionView Training",
            institution: "PSI - Process Soluções Inteligentes",
            year: "2022",
          },
          {
            name: "SCADA SAGE CentOS 6.8 Training",
            institution: "PSI - Process Soluções Inteligentes",
            year: "2018",
          },
          {
            name: "Alstom C264 Controller Training",
            institution: "PSI - Process Soluções Inteligentes",
            year: "2018",
          },
          {
            name: "Power BI from Basic to Advanced",
            year: "2023",
          },
          {
            name: "Power Systems Protection and Control",
            year: "2019",
          },
          {
            name: "Discovering Python",
            year: "2023",
          },
          {
            name: "Complete Shell Script",
            year: "2022",
          },
          {
            name: "NR 10 SEP",
            institution: "PSI - Process Soluções Inteligentes",
            year: "2018",
          },
          {
            name: "MS Excel - Advanced",
            year: "2015",
          },
          {
            name: "Electrical Machines",
            year: "2016",
          },
          {
            name: "Photovoltaic Systems Installation and Projects",
            year: "2016",
          },
          {
            name: "Electrical Commands",
            year: "2016",
          },
          {
            name: "CCNA 1 Networking Basics",
            year: "2008",
          },
        ],
      },
      jobs: [
        {
          title: "PCSS Project Coordinator",
          company: "PSI - Process Soluções Inteligentes",
          period: "2021 - Present",
          description: [
            "Lead Protection, Control and Supervision Systems (PCSS) projects in substations",
            "Conduct internal and external follow-ups, ensuring alignment between clients, suppliers, and company areas",
            "Develop, monitor, and update detailed schedules to ensure efficient execution",
            "Plan and control man-hours and resources, managing internal teams and third-party partners",
            "Provide continuous technical support to field teams, assisting in resolving technical challenges",
            "Coordinate Bill of Materials (BOM) reviews and approvals, ensuring compliance with technical requirements",
            "Participate in workstatement development, proposal analysis, and technical specifications according to contractual scope",
          ],
        },
        {
          title: "Senior Control and Supervision Systems Engineer",
          company: "PSI - Process Soluções Inteligentes",
          period: "2019 - 2021",
          description: [
            "Development of technical specifications for PCSS systems",
            "Technical support to field teams",
            "Installation and commissioning coordination",
            "Technical documentation review and approval",
          ],
        },
        {
          title: "Designer",
          company: "HIPARC Geotecnologia, Projetos e Aerolevantamentos",
          period: "2017 - 2018",
          description: ["Project 852 of Eletrobrás Furnas - UHE Marimbondo"],
        },
        {
          title: "Senior Electromechanical Technician",
          company: "JBS",
          period: "2016 - 2017",
          description: [
            "Responsible for installations and preventive/corrective maintenance of industrial systems and equipment, including 13.8 kV cubicle, MCCs, boilers, electrical and electronic machines and equipment",
            "Performing tests, replacement and configuration of communication, control and protection devices such as frequency inverters, soft-starts, relays and PLCs",
            "Reading and interpreting command and power projects. Operations support, executing local activities related to equipment impediment, activation and release following safety procedures",
          ],
        },
        {
          title: "Electrical Engineering Intern",
          company: "Furnas Centrais Elétrica S/A",
          period: "2014 - 2014",
          description: [
            "Monitoring of maintenance in protection, control and supervision circuits of power plants and substations",
            "Observation of tests on IED MiCOM P443, replacement of DJ9132 circuit breaker valves and updating of schematic diagrams",
            "Support in replacing excitation system capacitors",
          ],
        },
      ],
    },
  };

  const text = content[language];

  return (
    <article className="space-y-12">
      <header className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          {text.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
      </header>

      <section className="space-y-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <Briefcase className="text-blue-400 w-6 h-6" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-400">{text.experience}</h3>
        </div>
        <div className="space-y-6">
          {text.jobs.map((job, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
              <h4 className="text-2xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors mb-4">
                {job.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span>{job.period}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Building2 className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span>{job.company}</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                {job.description.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-emerald-500/10 rounded-xl">
            <GraduationCap className="text-emerald-400 w-6 h-6" />
          </div>
          <h3 className="text-2xl font-semibold text-emerald-400">{text.education.title}</h3>
        </div>
        <div className="space-y-6">
          {text.education.items.map((edu, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <h4 className="text-2xl font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors mb-4">
                {edu.degree}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Building2 className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  <span>{edu.institution}</span>
                </div>
              </div>
              {edu.details && (
                <ul className="space-y-3 text-gray-300">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 mt-1 text-emerald-400 group-hover:text-emerald-300 transition-colors flex-shrink-0" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-purple-500/10 rounded-xl">
            <BookOpen className="text-purple-400 w-6 h-6" />
          </div>
          <h3 className="text-2xl font-semibold text-purple-400">{text.courses.title}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {text.courses.items.map((course, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
              <h4 className="text-lg font-semibold text-purple-400 group-hover:text-purple-300 transition-colors mb-3">
                {course.name}
              </h4>
              <div className="space-y-2  text-gray-300">
                {course.institution && (
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <span className="text-sm">{course.institution}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="text-sm">{course.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}