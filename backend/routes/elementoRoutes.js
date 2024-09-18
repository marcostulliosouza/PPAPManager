const express = require('express');
const router = express.Router();
const elementoController = require('../controllers/elementoController');

// Listar todos os Elementos
router.get('/', elementoController.getAllElementos);

// Obter um Elemento por ID
router.get('/:id', elementoController.getElementoById);

// Criar um novo Elemento
router.post('/', elementoController.createElemento);

// Atualizar um Elemento por ID
router.put('/:id', elementoController.updateElemento);

// Excluir um Elemento por ID
router.delete('/:id', elementoController.deleteElemento);

module.exports = router;