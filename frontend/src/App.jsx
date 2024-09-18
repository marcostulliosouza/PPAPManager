// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import DocumentosPPAP from './pages/DocumentosPPAP/DocumentosPPAP';
import ControleVersoes from './pages/ControleVersoes/ControleVersoes';
import AprovaoAssinatura from './pages/AprovaoAssinatura/AprovaoAssinatura';
import IntegracaoFornecedores from './pages/IntegracaoFornecedores/IntegracaoFornecedores';
import Dashboard from './pages/Dashboard/Dashboard';
import Permissoes from './pages/Permissoes/Permissoes';
import Notificacoes from './pages/Notificacoes/Notificacoes';
import Relatorios from './pages/Relatorios/Relatorios';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentos" element={<DocumentosPPAP />} />
          <Route path="/controle-versoes" element={<ControleVersoes />} />
          <Route path="/aprovao-assinatura" element={<AprovaoAssinatura />} />
          <Route path="/integracao-fornecedores" element={<IntegracaoFornecedores />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/permissoes" element={<Permissoes />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          <Route path="/relatorios" element={<Relatorios />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;