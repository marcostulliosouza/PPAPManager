// ./controllers/versaoController.js
const Versao = require('../models/versao');

// Listar todas as versões
exports.getAllVersoes = async (req, res) => {
  try {
    const versoes = await Versao.findAll();
    res.json(versoes);
  } catch (error) {
    console.error('Erro ao carregar as versoes: ', error);
    res.status(500).json({ error: 'Erro ao listar versões' });
  }
};

// Obter uma versão por ID
exports.getVersaoById = async (req, res) => {
  try {
    const { id } = req.params;
    const versao = await Versao.findByPk(id);

    if (!versao) {
      return res.status(404).json({ error: 'Versão não encontrado' });
    }

    res.json(versao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter versão' });
  }
};

// Criar nova versão
exports.createVersao = async (req, res) => {
  try {
    const { ver_numero, ver_data, ppap_id } = req.body;
    console.log(req.body);
    const novaVersao = await Versao.create({ ver_numero: Number(ver_numero), ver_data, ppap_id });
    res.json(novaVersao);
  } catch (error) {
    console.error('Erro ao criar nova versão: ', error);
    res.status(500).json({ error: 'Erro ao criar versão' });
  }
};

// Atualizar versão
exports.updateVersao = async (req, res) => {
  try {
    const { id } = req.params;
    const { ver_numero, ver_data, ppap_id } = req.body;
    const versao = await Versao.findByPk(id);

    if (!versao) {
      return res.status(404).json({ error: 'Versão não encontrada' });
    }

    versao.ver_numero = ver_numero;
    versao.ver_data = ver_data;
    versao.ppap_id = ppap_id;
    await versao.save();

    res.json(versao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar versão' });
  }
};

// Excluir versão
exports.deleteVersao = async (req, res) => {
  try {
    const { id } = req.params;
    const versao = await Versao.findByPk(id);

    if (!versao) {
      return res.status(404).json({ error: 'Versão não encontrada' });
    }

    await versao.destroy();
    res.json({ message: 'Versão excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir versão' });
  }
};