// ./controllers/setorController.js
const Setor = require('../models/setor');

// Listar todos os setores
exports.getAllSetores = async (req, res) => {
  try {
    const setores = await Setor.findAll();
    res.json(setores);
  } catch (error) {
    console.error('Erro ao carregar os setores: ', error);
    res.status(500).json({ error: 'Erro ao listar setores' });
  }
};

// Obter um setor por ID
exports.getSetorById = async (req, res) => {
  try {
    const { id } = req.params;
    const setor = await Setor.findByPk(id);

    if (!setor) {
      return res.status(404).json({ error: 'Setor não encontrado' });
    }

    res.json(setor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter setor' });
  }
};

// Criar um novo setor
exports.createSetor = async (req, res) => {
  try {
    const { setor_nome, setor_descricao } = req.body;
    const novoSetor = await Setor.create({ setor_nome, setor_descricao });
    res.json(novoSetor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar setor' });
  }
};

// Atualizar setor
exports.updateSetor = async (req, res) => {
  try {
    const { id } = req.params;
    const { setor_nome, setor_descricao } = req.body;
    const setor = await Setor.findByPk(id);

    if (!setor) {
      return res.status(404).json({ error: 'Setor não encontrado' });
    }

    setor.setor_nome = setor_nome;
    setor.setor_descricao = setor_descricao;
    await setor.save();

    res.json(setor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar setor' });
  }
};

// Excluir setor
exports.deleteSetor = async (req, res) => {
  try {
    const { id } = req.params;
    const setor = await Setor.findByPk(id);

    if (!setor) {
      return res.status(404).json({ error: 'Setor não encontrado' });
    }

    await setor.destroy();
    res.json({ message: 'Setor excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir setor' });
  }
};