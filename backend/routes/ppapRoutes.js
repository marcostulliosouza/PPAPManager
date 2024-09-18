// ./routes/ppapRoutes.js
const express = require('express');
const router = express.Router();
const ppapController = require('../controllers/ppapController');

// Listar todos os PPAPs
router.get('/', ppapController.getAllPPAPs);

// Obter um PPAP por ID
router.get('/:id', ppapController.getPPAPById);

// Criar um novo PPAP
router.post('/', ppapController.createPPAP);

// Atualizar um PPAP por ID
router.put('/:id', ppapController.updatePPAP);

// Excluir um PPAP por ID
router.delete('/:id', ppapController.deletePPAP);

module.exports = router;