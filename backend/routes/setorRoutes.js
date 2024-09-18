// ./routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const setorController = require('../controllers/setorController');

// Listar todos os setores
router.get('/', setorController.getAllSetores);

// Obter um setor por ID
router.get('/:id', setorController.getSetorById);

// Criar um novo setor
router.post('/', setorController.createSetor);

// Atualizar um setor por ID
router.put('/:id', setorController.updateSetor);

// Excluir um setor por ID
router.delete('/:id', setorController.deleteSetor);

module.exports = router;