// src/components/DocumentForm/DocumentForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createPPAP, updatePPAP, getPPAPById } from '../../services/api';

const DocumentForm = () => {
  const { id } = useParams(); // Para editar um PPAP específico
  const navigate = useNavigate();

  // Estado para armazenar os dados do formulário e o status de carregamento
  const [ppap, setPpap] = useState({
    title: '',
    description: '',
    version: '',
    // Adicione outros campos conforme necessário
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Carregar dados do PPAP se estamos editando
  useEffect(() => {
    if (id) {
      const fetchPPAP = async () => {
        try {
          setLoading(true);
          const data = await getPPAPById(id);
          setPpap(data);
        } catch (err) {
          setError('Erro ao carregar PPAP.');
        } finally {
          setLoading(false);
        }
      };
      fetchPPAP();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPpap({ ...ppap, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (id) {
        await updatePPAP(id, ppap);
      } else {
        await createPPAP(ppap);
      }
      navigate('/documentos'); // Redirecionar após salvar
    } catch (err) {
      setError('Erro ao salvar PPAP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{id ? 'Editar PPAP' : 'Criar Novo PPAP'}</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading && <p>Loading...</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={ppap.title}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={ppap.description}
            onChange={handleChange}
            className="border p-2 w-full"
            rows="4"
            required
          />
        </div>
        <div>
          <label htmlFor="version" className="block text-gray-700">Versão:</label>
          <input
            type="text"
            id="version"
            name="version"
            value={ppap.version}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {id ? 'Atualizar PPAP' : 'Criar PPAP'}
        </button>
      </form>
    </div>
  );
};

export default DocumentForm;