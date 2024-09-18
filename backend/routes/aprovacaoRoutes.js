// ./outes/aprovacaoRoutes.js
const express = require('express');
const router = express.Router();
const aprovacaoController = require('../controllers/aprovacaoController');

// Listar todas as aprovações
router.get('/', aprovacaoController.getAllAprovacoes);

// Obter uma aprovação por ID
router.get('/:id', aprovacaoController.getAprovacaoById);

// Criar uma nova aprovação
router.post('/', aprovacaoController.createAprovacao);

// Atualizar uma aprovação por ID
router.put('/:id', aprovacaoController.updateAprovacao);

// Excluir uma aprovação por ID
router.delete('/:id', aprovacaoController.deleteAprovacao);

module.exports = router;