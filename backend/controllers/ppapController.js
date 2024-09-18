// ./controllers/ppapController.js
const PPAP = require('../models/ppap');

// Listar todos os PPAPs
exports.getAllPPAPs = async (req, res) => {
  try {
    const ppaps = await PPAP.findAll();
    res.json(ppaps);
  } catch (error) {
    console.error('Erro ao listar PAPPs: ', error);
    res.status(500).json({ error: 'Erro ao listar PPAPs' });
  }
};

// Obter um PPAP por ID
exports.getPPAPById = async (req, res) => {
  try {
    const { id } = req.params;
    const ppap = await PPAP.findByPk(id);

    if (!ppap) {
      return res.status(404).json({ error: 'PPAP não encontrado' });
    }

    res.json(ppap);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter PPAP' });
  }
};

// Criar novo PPAP
exports.createPPAP = async (req, res) => {
  try {
    const { ppap_nome, ppap_descricao, ppap_status, setor_id, fornecedor_id, usu_id } = req.body;
    const novoPPAP = await PPAP.create({ ppap_nome, ppap_descricao, ppap_status, setor_id, fornecedor_id, usu_id });
    res.json(novoPPAP);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar PPAP' });
  }
};

// Atualizar PPAP
exports.updatePPAP = async (req, res) => {
  try {
    const { id } = req.params;
    const { ppap_nome, ppap_descricao, ppap_status, setor_id, fornecedor_id, usu_id } = req.body;
    const ppap = await PPAP.findByPk(id);

    if (!ppap) {
      return res.status(404).json({ error: 'PPAP não encontrado' });
    }

    ppap.ppap_nome = ppap_nome;
    ppap.ppap_descricao = ppap_descricao;
    ppap.ppap_status = ppap_status;
    ppap.setor_id = setor_id;
    ppap.fornecedor_id = fornecedor_id;
    ppap.usu_id = usu_id;
    await ppap.save();

    res.json(ppap);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar PPAP' });
  }
};

// Excluir PPAP
exports.deletePPAP = async (req, res) => {
  try {
    const { id } = req.params;
    const ppap = await PPAP.findByPk(id);

    if (!ppap) {
      return res.status(404).json({ error: 'PPAP não encontrado' });
    }

    await ppap.destroy();
    res.json({ message: 'PPAP excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir PPAP' });
  }
};