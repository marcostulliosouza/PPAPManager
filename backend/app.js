const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Rotas
const ppapRoutes = require('./routes/ppapRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const setorRoutes = require('./routes/setorRoutes');
const versaoRoutes = require('./routes/versaoRoutes');
const elementoRoutes = require('./routes/elementoRoutes');
const anexoRoutes = require('./routes/anexoRoutes');
const aprovacaoRoutes = require('./routes/aprovacaoRoutes');
const fornecedorRoutes = require('./routes/fornecedorRoutes');
const ppapElementoRoutes = require('./routes/ppapElementoRoutes');

// Configuração do Sequelize (MySQL)
const sequelize = require('./config/database'); // Sua configuração do Sequelize

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Teste de conexão com o banco de dados MySQL
sequelize.authenticate()
  .then(() => console.log('Conectado ao banco de dados com sucesso.'))
  .catch((err) => console.error('Erro ao conectar ao banco de dados', err));

// Rotas principais
app.use('/api/ppaps', ppapRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/setores', setorRoutes);
app.use('/api/versoes', versaoRoutes);
app.use('/api/elementos', elementoRoutes);
app.use('/api/anexos', anexoRoutes);
app.use('/api/aprovacoes', aprovacaoRoutes);
app.use('/api/fornecedores', fornecedorRoutes);
app.use('/api/ppapelementos', ppapElementoRoutes);

// Rota padrão (root)
app.get('/', (req, res) => {
  res.send('API do Sistema de Gerenciamento de PPAP');
});

// Middleware de tratamento de erros 404
app.use((req, res, next) => {
  const error = new Error('Rota não encontrada');
  error.status = 404;
  next(error);
});

// Middleware de tratamento de erros gerais
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;