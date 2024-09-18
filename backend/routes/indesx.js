// ./routes/index.js
const express = require('express');
const router = express.Router();

const ppapRoutes = require('./ppapRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const setorRoutes = require('./setorRoutes');
const versaoRoutes = require('./versaoRoutes');
const elementoRoutes = require('./elementoRoutes');
const anexoRoutes = require('./anexoRoutes');
const aprovacaoRoutes = require('./aprovacaoRoutes');
const fornecedorRoutes = require('./fornecedorRoutes');
const ppapElementoRoutes = require('./ppapElementoRoutes');

// Rotas de PPAP
router.use('/ppaps', ppapRoutes);

// Rotas de Usuários
router.use('/usuarios', usuarioRoutes);

// Rotas de Setores
router.use('/setores', setorRoutes);

// Rotas de Versões
router.use('/versoes', versaoRoutes);

// Rotas de Elementos
router.use('/elementos', elementoRoutes);

// Rotas de Anexos
router.use('/anexos', anexoRoutes);

// Rotas de Aprovações
router.use('/aprovacoes', aprovacaoRoutes);

// Rotas de Fornecedores
router.use('/fornecedores', fornecedorRoutes);

// Rotas de PPAPElemento
router.use('/ppapelementos', ppapElementoRoutes);

module.exports = router;