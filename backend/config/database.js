// ./config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Conectado ao banco de dados com sucesso.'))
  .catch((error) => console.error('Falha ao conectar ao banco de dados:', error));

module.exports = sequelize;