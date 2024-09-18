// ./controllers/fornecedorController.js
const Fornecedor = require('../models/fornecedor');

// Listar todos os fornecedores
exports.getAllFornecedores = async (req, res) => {
  try {
    const fornecedores = await Fornecedor.findAll();
    res.json(fornecedores);
  } catch (error) {
    console.error('Erro ao listar fornecedores: ', error);
    res.status(500).json({ error: 'Erro ao listar fornecedores' });
  }
};

// Obter um fornecedor por ID
exports.getFornecedorById = async (req, res) => {
  try {
    const { id } = req.params;
    const fornecedor = await Fornecedor.findByPk(id);

    if (!fornecedor) {
      return res.status(404).json({ error: 'fornecedor não encontrado' });
    }

    res.json(fornecedor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter fornecedor' });
  }
};

// Criar novo fornecedor
exports.createFornecedor = async (req, res) => {
  try {
    const { fornecedor_nome, fornecedor_descricao } = req.body;
    const novoFornecedor = await Fornecedor.create({ fornecedor_nome, fornecedor_descricao });
    res.json(novoFornecedor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar fornecedor' });
  }
};

// Atualizar fornecedor
exports.updateFornecedor = async (req, res) => {
  try {
    const { id } = req.params;
    const { fornecedor_nome, fornecedor_descricao } = req.body;
    const fornecedor = await Fornecedor.findByPk(id);

    if (!fornecedor) {
      return res.status(404).json({ error: 'Fornecedor não encontrado' });
    }

    fornecedor.fornecedor_nome = fornecedor_nome;
    fornecedor.fornecedor_descricao = fornecedor_descricao;
    await fornecedor.save();

    res.json(fornecedor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar fornecedor' });
  }
};

// Excluir fornecedor
exports.deleteFornecedor = async (req, res) => {
  try {
    const { id } = req.params;
    const fornecedor = await Fornecedor.findByPk(id);

    if (!fornecedor) {
      return res.status(404).json({ error: 'Fornecedor não encontrado' });
    }

    await fornecedor.destroy();
    res.json({ message: 'Fornecedor excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir fornecedor' });
  }
};