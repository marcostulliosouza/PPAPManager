// src/components/DocumentosPPAP.js

import React, { useEffect, useState } from 'react';
import { getPPAPDocuments } from '../../services/api';

const DocumentosPPAP = ({ ppapId }) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const data = await getPPAPDocuments(ppapId);
        setDocuments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [ppapId]);

  if (loading) return <p className="text-gray-500">Carregando documentos...</p>;
  if (error) return <p className="text-red-500">Erro: {error}</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Documentos do PPAP</h1>
      {documents.length === 0 ? (
        <p className="text-gray-500">Nenhum documento encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {documents.map((doc) => (
            <li key={doc.anexo_id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{doc.anexo_nome}</h2>
              <a
                href={doc.anexo_url}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Documento
              </a>
              <p className="text-gray-500 mt-2">Data: {new Date(doc.anexo_data).toLocaleDateString()}</p>
              <p className="text-gray-500">Criado em: {new Date(doc.createdAt).toLocaleDateString()}</p>
              <p className="text-gray-500">Atualizado em: {new Date(doc.updatedAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DocumentosPPAP;