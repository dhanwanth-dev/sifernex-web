// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

import Chatbot from './pages/service-details/Chatbot';
import Document from './pages/service-details/Document';
import Workflow from './pages/service-details/Workflow';
import Agent from './pages/service-details/Agent';

import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Disclaimer from './pages/legal/Disclaimer';

import NotFound from './pages/NotFound'; // <-- 404 Page

function App() {
  return (
    <Router>
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Detail Pages */}
        <Route path="/service/chatbot" element={<Chatbot />} />
        <Route path="/service/document" element={<Document />} />
        <Route path="/service/workflow" element={<Workflow />} />
        <Route path="/service/agent" element={<Agent />} />

        {/* Legal Pages */}
        <Route path="/legal/privacy" element={<Privacy />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/legal/disclaimer" element={<Disclaimer />} />

        {/* 404 Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
