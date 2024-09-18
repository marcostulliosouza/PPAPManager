// src/components/Dashboard/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getPPAPs } from '../../services/api';

const Dashboard = () => {
  const [ppaps, setPPAPs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPPAPs = async () => {
      try {
        const data = await getPPAPs();
        setPPAPs(data);
      } catch (error) {
        setError('Erro ao carregar PPAPs');
      } finally {
        setLoading(false);
      }
    };

    fetchPPAPs();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Dashboard de PPAPs</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Status</th>
            <th>Versão</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {ppaps.map(ppap => (
            <tr key={ppap.id}>
              <td>{ppap.id}</td>
              <td>{ppap.ppap_nome}</td>
              <td>{ppap.ppap_status}</td>
              <td>{ppap.versao}</td>
              <td>
                <button>Ver detalhes</button>
                <button>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;