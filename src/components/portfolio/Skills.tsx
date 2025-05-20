import React from "react";
import { Briefcase, Wrench, Users, LineChart, Cpu, Book, CheckCircle } from "lucide-react";

export default function Skills({ language }) {
  const content = {
    pt: {
      title: "Habilidades",
      skills: [
        {
          icon: Briefcase,
          title: "Gestão e Coordenação",
          items: [
            "Gestão de equipes multicisciplinares",
            "Coordenação de projetos de SPCS",
            "Planejamento e controle de recursos/cronogramas e HH",
            "Gestão de prazos e custos",
          ],
        },
        {
          icon: Cpu,
          title: "Software e Ferramentas",
          items: [
            "Digsi5, PCM e acSELerator QuickSet",
            "VMWare Workstation, Virtual Box, CentOS e Rocky Linux",
            "Shell Script, Bash, Visual Basic, Python, TypeScript, JavaScript, CSS, HTML, Frameworks e Bibliotecas",
            "Microsoft Office 365, Project e Power BI",
            "Banco de Dados OSISoft PI, Postgresql, TimescaleDB e MS SQL Server",
          ],
        },
        {
          icon: Wrench,
          title: "Técnicas",
          items: [
            "Sistema de Proteção e Controle",
            "Sistema de Supervisão e Automação",
            "Sistema de Telecomunicação e topologia de redes",
            "Normas e Protocolos: IEC 61850 (MMS, GOOSE e SV), 60870-5-101/104, ICCP/TASE.2, DNP3, Modbus RTU/TCP, SNMP e sincronismo de tempo PTP, NTP/SNTP e IRIG-B",
            "SCADAs: SAGE, SPIN ActionView, eXpert SDI, Elipse e SICAM SCC",
            "UTRs e UCs: STD-7100, STD-300, SDI, RTAC, SICAM A8000, Alstom C264, C650, Siemens SIP5, ABB REC670, Treetech SDV e SPS",
            "IEDs: Siemens SIP5, ABB e SEL",
            "SICAR - Sistema de coleta e oscilografia do proprietário ISA Energia",
            "Análise e interpretação de diagramas de projetos",
          ],
        },
        {
          icon: Book,
          title: "Certificações",
          items: [
            "Técnico em Eletrônica",
            "Engenharia Elétrica",
            "MBA em Gestão de Projetos",
            "eXPert Development Tools - Sdi RTU, Sdi The Power Of Automation",
            "Proteção e Controle de Sistemas Elétricos de Potência",
            "Power BI completo do básico ao avançado",
            "Completo Shell Script",
            "Máquinas e Comandos Elétricos",
            "CCNA Networking Basics",
          ],
        },
      ],
    },
    en: {
      title: "Skills",
      skills: [
        {
          icon: Briefcase,
          title: "Management and Coordination",
          items: [
            "Multidisciplinary team management",
            "PCSS project coordination",
            "Resource/schedule and man-hour planning and control",
            "Deadline and cost management",
          ],
        },
        {
          icon: Cpu,
          title: "Software and Tools",
          items: [
            "Digsi5, PCM and acSELerator QuickSet",
            "VMWare Workstation, Virtual Box, CentOS and Rocky Linux",
            "Shell Script, Bash, Visual Basic, Python, TypeScript, JavaScript, CSS, HTML, Frameworks and Libraries",
            "Microsoft Office 365, Project and Power BI",
            "OSISoft PI Database, PostgreSQL, TimescaleDB and MS SQL Server",
          ],
        },
        {
          icon: Wrench,
          title: "Technical",
          items: [
            "Protection and Control System",
            "Supervision and Automation System",
            "Telecommunication System and network topology",
            "Standards and Protocols: IEC 61850 (MMS, GOOSE and SV), 60870-5-101/104, ICCP/TASE.2, DNP3, Modbus RTU/TCP, SNMP and time sync PTP, NTP/SNTP and IRIG-B",
            "SCADAs: SAGE, SPIN ActionView, eXpert SDI, Elipse and SICAM SCC",
            "RTUs and CUs: STD-7100, STD-300, SDI, RTAC, SICAM A8000, Alstom C264, C650, Siemens SIP5, ABB REC670, Treetech SDV and SPS",
            "IEDs: Siemens SIP5, ABB and SEL",
            "SICAR - ISA Energia's proprietary data collection and oscillography system",
            "Analysis and interpretation of project diagrams",
          ],
        },
        {
          icon: Book,
          title: "Certifications",
          items: [
            "Electronics Technician",
            "Electrical Engineering",
            "MBA in Project Management",
            "eXPert Development Tools - Sdi RTU, Sdi The Power Of Automation",
            "Power Systems Protection and Control",
            "Complete Power BI from Basic to Advanced",
            "Complete Shell Script",
            "Electrical Machines and Commands",
            "CCNA Networking Basics",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {text.skills.map((skill, index) => (
          <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <skill.icon className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                {skill.title}
              </h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              {skill.items.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 mt-1 text-emerald-400 group-hover:text-emerald-300 transition-colors flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}