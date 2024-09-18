// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <nav>
        <ul>
          <li>
            <Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</Link>
          </li>
          <li>
            <Link to="/documentos" className="block py-2 px-4 hover:bg-gray-700 rounded">Documentos PPAP</Link>
          </li>
          <li>
            <Link to="/controle-versoes" className="block py-2 px-4 hover:bg-gray-700 rounded">Controle de Versões</Link>
          </li>
          <li>
            <Link to="/aprovao-assinatura" className="block py-2 px-4 hover:bg-gray-700 rounded">Aprovação e Assinatura</Link>
          </li>
          <li>
            <Link to="/integracao-fornecedores" className="block py-2 px-4 hover:bg-gray-700 rounded">Integração com Fornecedores</Link>
          </li>
          <li>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">Dashboard</Link>
          </li>
          <li>
            <Link to="/permissoes" className="block py-2 px-4 hover:bg-gray-700 rounded">Permissões</Link>
          </li>
          <li>
            <Link to="/notificacoes" className="block py-2 px-4 hover:bg-gray-700 rounded">Notificações</Link>
          </li>
          <li>
            <Link to="/relatorios" className="block py-2 px-4 hover:bg-gray-700 rounded">Relatórios</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;