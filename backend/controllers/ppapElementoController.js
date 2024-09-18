// ./controllers/ppapElementoController.js
const PPAPElemento = require('../models/ppapElemento');

// Listar todos os PPAPElementos
exports.getAllPPAPElementos = async (req, res) => {
  try {
    const ppapElementos = await PPAPElemento.findAll();
    res.json(ppapElementos);
  } catch (error) {
    console.error('Erro ao carregadar os PPAPElementos: ', error);
    res.status(500).json({ error: 'Erro ao listar PPAPElementos' });
  }
};

// Obter um PPAPElementos por ID
exports.getPPAPElementoById = async (req, res) => {
  try {
    const { id } = req.params;
    const ppapElementos = await PPAPElemento.findByPk(id);

    if (!ppapElementos) {
      return res.status(404).json({ error: 'PPAPElementos não encontrado' });
    }

    res.json(ppapElementos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter PPAPElementos' });
  }
};

// Criar um novo PPAPElementos
exports.createPPAPElemento = async (req, res) => {
  try {
    const { ppapElemento_nome, ppapElemento_descricao } = req.body;
    const novoPpapElemento = await PPAPElemento.create({ ppapElemento_nome, ppapElemento_descricao });
    res.json(novoPpapElemento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar PPAPElementos' });
  }
};

// Atualizar um PPAPElementos
exports.updatePPAPElemento = async (req, res) => {
  try {
    const { id } = req.params;
    const { ppapElemento_nome, ppapElemento_descricao } = req.body;
    const ppapElemento = await PPAPElemento.findByPk(id);

    if (!ppapElemento) {
      return res.status(404).json({ error: 'PPAPElementos não encontrado' });
    }

    ppapElemento.ppapElemento_nome = ppapElemento_nome;
    ppapElemento.ppapElemento_descricao = ppapElemento_descricao;
    await ppapElemento.save();

    res.json(ppapElemento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar PPAPElementos' });
  }
};

// Excluir um PPAPElementos
exports.deletePPAPElemento = async (req, res) => {
  try {
    const { id } = req.params;
    const ppapElemento = await PPAPElemento.findByPk(id);

    if (!ppapElemento) {
      return res.status(404).json({ error: 'PPAPElementos não encontrado' });
    }

    await ppapElemento.destroy();
    res.json({ message: 'PPAPElementos excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir PPAPElementos' });
  }
};