import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MenuLayout } from './layouts/MenuLayout';
import { Dashboard } from './pages/Dashboard';
import { Handover } from './pages/Handover';
import { PlanCont } from './pages/PlanCont';
import { Alocacoes } from './pages/Alocacoes';
import { Oportunidades } from './pages/Oportunidades';
import { Portfolio } from './pages/Portfolio';
import { Home } from './pages/Home';
import { ProjectsNow } from './pages/ProjectsNow';
import { Cronogramas } from './pages/Cronogramas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuLayout />}>
          <Route index element={<Home />} />
          <Route path="handover" element={<Handover />} />
          <Route path="projects-now" element={<ProjectsNow />} />
          <Route path="oportunidades" element={<Oportunidades />} />
          <Route path="cronogramas" element={<Cronogramas />} />
          <Route path="alocacoes" element={<Alocacoes />} />
          <Route path="plancont" element={<PlanCont />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;