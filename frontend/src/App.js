import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header.js';
import HomePage from '../src/pages/HomePage.js';
import ServicesPage from '../src/pages/ServicesPage.js';
import TeamPage from '../src/pages/TeamPage.js';
import ProjectsPage from '../src/pages/ProjectsPage.js';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
