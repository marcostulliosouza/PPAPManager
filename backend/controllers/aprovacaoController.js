// ./controllers/aprovacaoController.js
const Aprovacao = require('../models/aprovacao');

// Listar todas as aprovações
exports.getAllAprovacoes = async (req, res) => {
  try {
    const aprovacoes = await Aprovacao.findAll();
    res.json(aprovacoes);
  } catch (error) {
    console.error('Erro ao carregar todas as aprovações: ', error);
    res.status(500).json({ error: 'Erro ao listar aprovações' });
  }
};

// Obter uma aprovacao por ID
exports.getAprovacaoById = async (req, res) => {
  try {
    const { id } = req.params;
    const aprovacao = await Aprovacao.findByPk(id);

    if (!aprovacao) {
      return res.status(404).json({ error: 'Aprovação não encontrado' });
    }

    res.json(anexo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter aprovação' });
  }
};

// Criar nova aprovação
exports.createAprovacao = async (req, res) => {
  try {
    const { aprov_status, aprov_data, aprov_comentario, ver_id, usu_id } = req.body;
    const novaAprovacao = await Aprovacao.create({ aprov_status, aprov_data, aprov_comentario, ver_id, usu_id });
    res.json(novaAprovacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar aprovação' });
  }
};

// Atualizar aprovação
exports.updateAprovacao = async (req, res) => {
  try {
    const { id } = req.params;
    const { aprov_status, aprov_data, aprov_comentario, ver_id, usu_id } = req.body;
    const aprovacao = await Aprovacao.findByPk(id);

    if (!aprovacao) {
      return res.status(404).json({ error: 'Aprovação não encontrada' });
    }

    aprovacao.aprov_status = aprov_status;
    aprovacao.aprov_data = aprov_data;
    aprovacao.aprov_comentario = aprov_comentario;
    aprovacao.ver_id = ver_id;
    aprovacao.usu_id = usu_id;
    await aprovacao.save();

    res.json(aprovacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar aprovação' });
  }
};

// Excluir aprovação
exports.deleteAprovacao = async (req, res) => {
  try {
    const { id } = req.params;
    const aprovacao = await Aprovacao.findByPk(id);

    if (!aprovacao) {
      return res.status(404).json({ error: 'Aprovação não encontrada' });
    }

    await aprovacao.destroy();
    res.json({ message: 'Aprovação excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir aprovação' });
  }
};