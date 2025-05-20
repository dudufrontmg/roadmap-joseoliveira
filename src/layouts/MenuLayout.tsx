import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  FileSpreadsheet, 
  BarChart3, 
  Users, 
  TrendingUp,
  Briefcase,
  Menu,
  Home,
  ArrowLeft,
  Clock,
  Calendar
} from 'lucide-react';

export const MenuLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const menuItems = [
    {
      icon: <Home className="w-5 h-5" />,
      label: 'Página Inicial',
      path: '/'
    },
    { 
      icon: <FileSpreadsheet className="w-5 h-5" />, 
      label: 'Handover/KoM', 
      path: '/handover' 
    },
    { 
      icon: <Clock className="w-5 h-5" />, 
      label: 'Projects Now', 
      path: '/projects-now' 
    },
    { 
      icon: <TrendingUp className="w-5 h-5" />, 
      label: 'Oportunidades', 
      path: '/oportunidades' 
    },
    { 
      icon: <Calendar className="w-5 h-5" />, 
      label: 'Cronogramas', 
      path: '/cronogramas' 
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      label: 'Alocações', 
      path: '/alocacoes' 
    },
    { 
      icon: <BarChart3 className="w-5 h-5" />, 
      label: 'Plan&Control HH', 
      path: '/plancont' 
    },
    { 
      icon: <Menu className="w-5 h-5" />, 
      label: 'Dashboards', 
      path: '/dashboard' 
    },
    { 
      icon: <Briefcase className="w-5 h-5" />, 
      label: 'Portfólio', 
      path: '/portfolio' 
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 text-center border-b border-gray-200">
          <img
            src="/images/perfil/foto_perfil.jpg"
            alt="Foto de Perfil"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h1 className="text-xl font-bold text-gray-800 mb-1">
            José Eduardo Oliveira
          </h1>
          <p className="text-sm text-gray-600">
            Coordenador de Projetos SPCS | Gestor de Equipes SPCS
          </p>
        </div>
        
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800 mb-4">ÍNDICE</h2>
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        {!isHome && (
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar à Página Inicial
          </button>
        )}
        <div className="relative z-10">
          {isHome && (
            <div className="text-center mb-12">
              <h2 className="text-[36px] text-gray-600 mb-4">SEJA BEM-VINDO</h2>
              <h1 className="text-[36px] font-bold text-gray-800">ROADMAP</h1>
            </div>
          )}
          <Outlet />
        </div>
      </main>
    </div>
  );
};