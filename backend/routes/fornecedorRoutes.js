// ./routes/fornecedorRoutes.js
const express = require('express');
const router = express.Router();
const fornecedorController = require('../controllers/fornecedorController');

// Listar todos os fornecedores
router.get('/', fornecedorController.getAllFornecedores);

// Obter um fornecedor por ID
router.get('/:id', fornecedorController.getFornecedorById);

// Criar um novo fornecedor
router.post('/', fornecedorController.createFornecedor);

// Atualizar um fornecedor por ID
router.put('/:id', fornecedorController.updateFornecedor);

// Excluir um fornecedor por ID
router.delete('/:id', fornecedorController.deleteFornecedor);

module.exports = router;