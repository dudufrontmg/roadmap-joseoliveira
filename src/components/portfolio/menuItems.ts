import { User, FileText, Wrench, Briefcase, Code, Mail } from 'lucide-react';

export const menuItems = [
  { id: "about", label: { pt: "Sobre", en: "About" }, icon: User },
  { id: "resume", label: { pt: "Currículo", en: "Resume" }, icon: FileText },
  { id: "skills", label: { pt: "Habilidades", en: "Skills" }, icon: Wrench },
  {
    id: "professional-projects",
    label: { pt: "Projetos Profissionais", en: "Professional Projects" },
    icon: Briefcase,
  },
  {
    id: "side-projects",
    label: { pt: "Projetos Paralelos", en: "Side Projects" },
    icon: Code,
  },
  { id: "contact", label: { pt: "Contato", en: "Contact" }, icon: Mail },
];