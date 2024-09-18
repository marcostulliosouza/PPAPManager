// ./routes/anexoRoutes.js
const express = require('express');
const router = express.Router();
const anexoController = require('../controllers/anexoController');

// Listar todos os anexos
router.get('/', anexoController.getAllAnexos);

// Obter um anexo por ID
router.get('/:id', anexoController.getAnexoById);

// Criar um novo anexo
router.post('/', anexoController.createAnexo);

// Atualizar um anexo por ID
router.put('/:id', anexoController.updateAnexo);

// Excluir um anexo por ID
router.delete('/:id', anexoController.deleteAnexo);

module.exports = router;