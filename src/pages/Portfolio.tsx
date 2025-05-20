import React, { useState, createContext } from 'react';
import { Languages, Menu } from 'lucide-react';
import About from '../components/portfolio/About';
import Resume from '../components/portfolio/Resume';
import Skills from '../components/portfolio/Skills';
import ProfessionalProjects from '../components/portfolio/ProfessionalProjects';
import SideProjects from '../components/portfolio/SideProjects';
import Contact from '../components/portfolio/Contact';
import { menuItems } from '../components/portfolio/menuItems';

export const Portfolio = () => {
  const [language, setLanguage] = useState('pt');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <About language={language} />;
      case "resume":
        return <Resume language={language} />;
      case "skills":
        return <Skills language={language} />;
      case "professional-projects":
        return <ProfessionalProjects language={language} />;
      case "side-projects":
        return <SideProjects language={language} />;
      case "contact":
        return <Contact language={language} />;
      default:
        return <About language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Overlay for mobile menu */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Language Toggle */}
      <button
        onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center space-x-2 border border-gray-700 hover:border-blue-500/50 shadow-lg"
      >
        <Languages size={20} className="text-blue-400" />
        <span className="font-medium">{language === "pt" ? "EN" : "PT"}</span>
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 shadow-lg"
      >
        <Menu size={24} className="text-blue-400" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-800/80 backdrop-blur-sm border-r border-gray-700
          transform transition-all duration-300 ease-in-out z-40
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-blue-500/50 shadow-xl">
              <img
                src="/images/perfil/foto_perfil.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              José Eduardo
            </h1>
            <p className="text-sm text-gray-400 text-center mt-2">
              {language === "pt"
                ? "Coordenador de Projetos SPCS | Gestor de Recursos"
                : "PCSS Project Coordinator | Resource Manager"}
            </p>
          </div>

          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`
                      w-full px-4 py-3 rounded-xl text-left transition-all duration-300
                      flex items-center space-x-3
                      ${
                        activeSection === item.id
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/50"
                          : "hover:bg-gray-700/50 text-gray-300 border border-transparent"
                      }
                    `}
                  >
                    <item.icon size={18} className={activeSection === item.id ? "text-blue-400" : "text-gray-400"} />
                    <span>{item.label[language]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 p-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-xl">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};