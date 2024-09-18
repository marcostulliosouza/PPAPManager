// ./controllers/usuarioController.js
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

// Listar todos os usuários
exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao carregar os usuários: ', error);
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
};

// Obter um usuário por ID
exports.getUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter usuário' });
  }
};

// Criar novo usuário
exports.createUsuario = async (req, res) => {
  try {
    const { usu_nome, usu_email, usu_senha, usu_tipo, setor_id } = req.body;

    const hashSenha = await bcrypt.hash(usu_senha, 10);

    const novoUsuario = await Usuario.create({
      usu_nome,
      usu_email,
      usu_senha: hashSenha,
      usu_tipo,
      setor_id
    });

    res.json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

// Atualizar usuário
exports.updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { usu_nome, usu_email, usu_tipo, setor_id } = req.body;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    usuario.usu_nome = usu_nome;
    usuario.usu_email = usu_email;
    usuario.usu_tipo = usu_tipo;
    usuario.setor_id = setor_id;
    await usuario.save();

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
};

// Excluir usuário
exports.deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    await usuario.destroy();
    res.json({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir usuário' });
  }
};