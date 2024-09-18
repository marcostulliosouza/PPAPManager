// ./routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Listar todos os usuários
router.get('/', usuarioController.getAllUsuarios);

// Obter um usuário por ID
router.get('/:id', usuarioController.getUsuarioById);

// Criar um novo usuário
router.post('/', usuarioController.createUsuario);

// Atualizar um usuário por ID
router.put('/:id', usuarioController.updateUsuario);

// Excluir um usuário por ID
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;