// ./routes/versaoRoutes.js
const express = require('express');
const router = express.Router();
const versaoController = require('../controllers/versaoController');

// Listar todas as versões
router.get('/', versaoController.getAllVersoes);

// Obter uma versão por ID
router.get('/:id', versaoController.getVersaoById);

// Criar uma nova versão
router.post('/', versaoController.createVersao);

// Atualizar uma versão por ID
router.put('/:id', versaoController.updateVersao);

// Excluir uma versão por ID
router.delete('/:id', versaoController.deleteVersao);

module.exports = router;