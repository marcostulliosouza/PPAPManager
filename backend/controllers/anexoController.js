// ./controllers/anexoController.js
const Anexo = require('../models/anexo');

// Listar todos os anexos
exports.getAllAnexos = async (req, res) => {
  try {
    const anexos = await Anexo.findAll();
    res.json(anexos);
  } catch (error) {
    console.error('Erro ao carregar os anexos: ', error);
    res.status(500).json({ error: 'Erro ao listar anexos' });
  }
};

// Obter um anexo por ID
exports.getAnexoById = async (req, res) => {
  try {
    const { id } = req.params;
    const anexo = await Anexo.findByPk(id);

    if (!anexo) {
      return res.status(404).json({ error: 'Anexo não encontrado' });
    }

    res.json(anexo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter anexo' });
  }
};

// Criar novo anexo
exports.createAnexo = async (req, res) => {
  try {
    const { anexo_url, anexo_descricao, ppap_id, ele_id } = req.body;
    const novoAnexo = await Anexo.create({ anexo_url, anexo_descricao, ppap_id, ele_id });
    res.json(novoAnexo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar anexo' });
  }
};

// Atualizar anexo
exports.updateAnexo = async (req, res) => {
  try {
    const { id } = req.params;
    const { anexo_url, anexo_descricao, ppap_id, ele_id } = req.body;
    const anexo = await Anexo.findByPk(id);

    if (!anexo) {
      return res.status(404).json({ error: 'Anexo não encontrado' });
    }

    anexo.anexo_url = anexo_url;
    anexo.anexo_descricao = anexo_descricao;
    anexo.ppap_id = ppap_id;
    anexo.ele_id = ele_id;
    await anexo.save();

    res.json(anexo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar anexo' });
  }
};

// Excluir anexo
exports.deleteAnexo = async (req, res) => {
  try {
    const { id } = req.params;
    const anexo = await Anexo.findByPk(id);

    if (!anexo) {
      return res.status(404).json({ error: 'Anexo não encontrado' });
    }

    await anexo.destroy();
    res.json({ message: 'Anexo excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir anexo' });
  }
};