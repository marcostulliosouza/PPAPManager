// ./controllers/elementoController.js
const Elemento = require('../models/elemento');

// Listar todos os Elementos
exports.getAllElementos = async (req, res) => {
  try {
    const elementos = await Elemento.findAll();
    res.json(elementos);
  } catch (error) {
    console.error('Erro ao carregadar os elementos: ', error);
    res.status(500).json({ error: 'Erro ao listar Elementos' });
  }
};

// Obter um Elemento por ID
exports.getElementoById = async (req, res) => {
  try {
    const { id } = req.params;
    const elemento = await Elemento.findByPk(id);

    if (!elemento) {
      return res.status(404).json({ error: 'Elemento não encontrado' });
    }

    res.json(elemento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter Elemento' });
  }
};

// Criar um novo Elemento
exports.createElemento = async (req, res) => {
  try {
    const { elemento_nome, elemento_descricao } = req.body;
    const novoElemento = await Elemento.create({ elemento_nome, elemento_descricao });
    res.json(novoElemento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar Elemento' });
  }
};

// Atualizar um Elemento
exports.updateElemento = async (req, res) => {
  try {
    const { id } = req.params;
    const { elemento_nome, elemento_descricao } = req.body;
    const elemento = await Elemento.findByPk(id);

    if (!elemento) {
      return res.status(404).json({ error: 'Elemento não encontrado' });
    }

    elemento.elemento_nome = elemento_nome;
    elemento.elemento_descricao = elemento_descricao;
    await elemento.save();

    res.json(elemento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar Elemento' });
  }
};

// Excluir um Elemento
exports.deleteElemento = async (req, res) => {
  try {
    const { id } = req.params;
    const elemento = await Elemento.findByPk(id);

    if (!elemento) {
      return res.status(404).json({ error: 'Elemento não encontrado' });
    }

    await elemento.destroy();
    res.json({ message: 'Elemento excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir Elemento' });
  }
};