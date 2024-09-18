// src/services/api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Função para obter todos os PPAPs
export const getPPAPs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ppaps`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar PPAPs:', error);
    throw error;
  }
};

// Função para obter um PPAP específico por ID
export const getPPAPById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ppaps/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar PPAP com ID ${id}:`, error);
    throw error;
  }
};

// Função para criar um novo PPAP
export const createPPAP = async (ppapData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ppaps`, ppapData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar PPAP:', error);
    throw error;
  }
};

// Função para atualizar um PPAP existente
export const updatePPAP = async (id, ppapData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/ppaps/${id}`, ppapData);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar PPAP com ID ${id}:`, error);
    throw error;
  }
};

// Função para excluir um PPAP
export const deletePPAP = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/ppaps/${id}`);
  } catch (error) {
    console.error(`Erro ao excluir PPAP com ID ${id}:`, error);
    throw error;
  }
};

// Função para buscar PPAPs com base em um critério de pesquisa
export const searchPPAPs = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ppaps/search`, {
      params: { q: query }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar PPAPs por critério:', error);
    throw error;
  }
};

// Função para obter o histórico de versões de um PPAP
export const getPPAPVersions = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/versoes`, {
      params: { ppapId: id }
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar versões de PPAP com ID ${id}:`, error);
    throw error;
  }
};

// Função para adicionar uma nova versão ao PPAP
export const addPPAPVersion = async (versionData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/versoes`, versionData);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar versão ao PPAP:', error);
    throw error;
  }
};

// Função para obter todos os elementos de uma versão de PPAP
export const getPPAPElements = async (ppapId, versionId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/elementos`, {
      params: { ppapId, versionId }
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar elementos do PPAP com ID ${ppapId} e versão ${versionId}:`, error);
    throw error;
  }
};

// Função para adicionar um elemento a uma versão de PPAP
export const addPPAPElement = async (elementData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/elementos`, elementData);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar elemento ao PPAP:', error);
    throw error;
  }
};

// Função para excluir um elemento de uma versão de PPAP
export const deletePPAPElement = async (elementId) => {
  try {
    await axios.delete(`${API_BASE_URL}/elementos/${elementId}`);
  } catch (error) {
    console.error(`Erro ao excluir elemento com ID ${elementId}:`, error);
    throw error;
  }
};

// Função para obter todos os documentos de um PPAP
export const getPPAPDocuments = async (ppapId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/anexos`, {
      params: { ppapId }
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar documentos do PPAP com ID ${ppapId}:`, error);
    throw error;
  }
};

// Função para adicionar um documento ao PPAP
export const addPPAPDocument = async (documentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/anexos`, documentData);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar documento ao PPAP:', error);
    throw error;
  }
};

// Função para excluir um documento de um PPAP
export const deletePPAPDocument = async (documentId) => {
  try {
    await axios.delete(`${API_BASE_URL}/anexos/${documentId}`);
  } catch (error) {
    console.error(`Erro ao excluir documento com ID ${documentId}:`, error);
    throw error;
  }
};

// Função para obter informações detalhadas de um documento específico de PPAP
export const getDocumentDetailsPPAP = async (documentId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/anexos/${documentId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar detalhes do documento com ID ${documentId}:`, error);
    throw error;
  }
};

// Função para obter todos os anexos de um PPAP
export const getPPAPAttachments = async (ppapId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/attachments`, {
      params: { ppapId }
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar anexos do PPAP com ID ${ppapId}:`, error);
    throw error;
  }
};

// Função para adicionar um anexo ao PPAP
export const addPPAPAttachment = async (attachmentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/attachments`, attachmentData);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar anexo ao PPAP:', error);
    throw error;
  }
};

// Função para excluir um anexo de um PPAP
export const deletePPAPAttachment = async (attachmentId) => {
  try {
    await axios.delete(`${API_BASE_URL}/attachments/${attachmentId}`);
  } catch (error) {
    console.error(`Erro ao excluir anexo com ID ${attachmentId}:`, error);
    throw error;
  }
};

// Função para obter informações detalhadas de um anexo específico de PPAP
export const getAttachmentDetailsPPAP = async (attachmentId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/attachments/${attachmentId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar detalhes do anexo com ID ${attachmentId}:`, error);
    throw error;
  }
};

// Função para obter aprovações de um PPAP
export const getPPAPApprovals = async (ppapId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/approvals`, {
      params: { ppapId }
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar aprovações do PPAP com ID ${ppapId}:`, error);
    throw error;
  }
};

// Função para adicionar uma aprovação ao PPAP
export const addPPAPApproval = async (approvalData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/approvals`, approvalData);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar aprovação ao PPAP:', error);
    throw error;
  }
};

// Função para atualizar uma aprovação de PPAP
export const updatePPAPApproval = async (approvalId, approvalData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/approvals/${approvalId}`, approvalData);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar aprovação com ID ${approvalId}:`, error);
    throw error;
  }
};

// Função para excluir uma aprovação de PPAP
export const deletePPAPApproval = async (approvalId) => {
  try {
    await axios.delete(`${API_BASE_URL}/approvals/${approvalId}`);
  } catch (error) {
    console.error(`Erro ao excluir aprovação com ID ${approvalId}:`, error);
    throw error;
  }
};

// Função para obter todos os usuários
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};

// Função para obter um usuário específico por ID
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar usuário com ID ${id}:`, error);
    throw error;
  }
};

// Função para criar um novo usuário
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/usuarios`, userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

// Função para atualizar um usuário existente
export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/usuarios/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar usuário com ID ${id}:`, error);
    throw error;
  }
};

// Função para excluir um usuário
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/usuarios/${id}`);
  } catch (error) {
    console.error(`Erro ao excluir usuário com ID ${id}:`, error);
    throw error;
  }
};

// Função para obter todos os setores
export const getSectors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/setores`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar setores:', error);
    throw error;
  }
};

// Função para obter um setor específico por ID
export const getSectorById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/setores/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar setor com ID ${id}:`, error);
    throw error;
  }
};

// Função para criar um novo setor
export const createSector = async (sectorData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/setores`, sectorData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar setor:', error);
    throw error;
  }
};

// Função para atualizar um setor existente
export const updateSector = async (id, sectorData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/setores/${id}`, sectorData);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar setor com ID ${id}:`, error);
    throw error;
  }
};

// Função para excluir um setor
export const deleteSector = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/setores/${id}`);
  } catch (error) {
    console.error(`Erro ao excluir setor com ID ${id}:`, error);
    throw error;
  }
};

// Função para obter todos os fornecedores
export const getSuppliers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fornecedores`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar fornecedores:', error);
    throw error;
  }
};

// Função para obter um fornecedor específico por ID
export const getSupplierById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fornecedores/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar fornecedor com ID ${id}:`, error);
    throw error;
  }
};

// Função para criar um novo fornecedor
export const createSupplier = async (supplierData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/fornecedores`, supplierData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar fornecedor:', error);
    throw error;
  }
};

// Função para atualizar um fornecedor existente
export const updateSupplier = async (id, supplierData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/fornecedores/${id}`, supplierData);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar fornecedor com ID ${id}:`, error);
    throw error;
  }
};

// Função para excluir um fornecedor
export const deleteSupplier = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/fornecedores/${id}`);
  } catch (error) {
    console.error(`Erro ao excluir fornecedor com ID ${id}:`, error);
    throw error;
  }
};

// Função para obter todos os elementos
export const getElements = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/elementos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar elementos:', error);
    throw error;
  }
};

// Função para obter um elemento específico por ID
export const getElementById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/elementos/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar elemento com ID ${id}:`, error);
    throw error;
  }
};

// Função para criar um novo elemento
export const createElement = async (elementData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/elementos`, elementData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar elemento:', error);
    throw error;
  }
};

// Função para atualizar um elemento existente
export const updateElement = async (id, elementData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/elementos/${id}`, elementData);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar elemento com ID ${id}:`, error);
    throw error;
  }
};

// Função para excluir um elemento
export const deleteElement = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/elementos/${id}`);
  } catch (error) {
    console.error(`Erro ao excluir elemento com ID ${id}:`, error);
    throw error;
  }
};