// src/pages/ControleVersoes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getPPAPVersions, addPPAPVersion } from '../../services/api'; // Importe suas funções de API

const ControleVersoes = () => {
  const [ppap_id, setPpapId] = useState(null); // ID do PPAP para o qual as versões são gerenciadas
  const [versions, setVersions] = useState([]);
  const [newVersion, setNewVersion] = useState({ versao_numero: '', versao_descricao: '' });

  useEffect(() => {
    if (ppap_id) {
      fetchVersions();
    }
  }, [ppap_id]);

  const fetchVersions = async () => {
    try {
      const data = await getPPAPVersions(ppap_id);
      setVersions(data);
    } catch (error) {
      console.error('Erro ao buscar versões:', error);
    }
  };

  const handleAddVersion = async () => {
    try {
      await addPPAPVersion({ ...newVersion, ppap_id });
      setNewVersion({ versao_numero: '', versao_descricao: '' });
      fetchVersions(); // Atualize a lista de versões
    } catch (error) {
      console.error('Erro ao adicionar versão:', error);
    }
  };

  // const handleDeleteVersion = async (versionId) => {
  //   try {
  //     await deletePPAPVersion(versionId);
  //     fetchVersions(); // Atualize a lista de versões
  //   } catch (error) {
  //     console.error('Erro ao excluir versão:', error);
  //   }
  // };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Controle de Versões</h1>

      <div className="mb-4">
        <label htmlFor="ppapId" className="block mb-2">ID do PPAP</label>
        <input
          type="number"
          id="ppapId"
          value={ppap_id || ''}
          onChange={(e) => setPpapId(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      {ppap_id && (
        <>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Adicionar Nova Versão</h2>
            <input
              type="number"
              placeholder="Número da Versão"
              value={newVersion.versao_numero}
              onChange={(e) => setNewVersion({ ...newVersion, versao_numero: e.target.value })}
              className="p-2 border border-gray-300 rounded mr-2"
            />
            <input
              type="text"
              placeholder="Descrição"
              value={newVersion.versao_descricao}
              onChange={(e) => setNewVersion({ ...newVersion, versao_descricao: e.target.value })}
              className="p-2 border border-gray-300 rounded mr-2"
            />
            <button
              onClick={handleAddVersion}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Adicionar
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Versões Existentes</h2>
            <ul>
              {versions.map((version) => (
                <li key={version.versao_id} className="flex items-center justify-between mb-2 p-2 border border-gray-300 rounded">
                  <div>
                    <span className="font-semibold">Versão {version.versao_numero}: </span>
                    {version.versao_descricao}
                  </div>
                  <button
                    onClick={() => handleDeleteVersion(version.versao_id)}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    Excluir
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ControleVersoes;