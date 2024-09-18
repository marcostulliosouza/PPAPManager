
// ./routes/ppapElementoRoutes.js
const express = require('express');
const router = express.Router();
const ppapElementoController = require('../controllers/ppapElementoController');

// Listar todos os ppapElementoRoutes
router.get('/', ppapElementoController.getAllPPAPElementos);

// Obter um ppapElementoRoutes por ID
router.get('/:id', ppapElementoController.getPPAPElementoById);

// Criar um novo ppapElementoRoutes
router.post('/', ppapElementoController.createPPAPElemento);

// Atualizar um ppapElementoRoutes por ID
router.put('/:id', ppapElementoController.updatePPAPElemento);

// Excluir um ppapElementoRoutes por ID
router.delete('/:id', ppapElementoController.deletePPAPElemento);

module.exports = router;