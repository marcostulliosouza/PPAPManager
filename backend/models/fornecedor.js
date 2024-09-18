// ./models/fornecedor.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fornecedor = sequelize.define('Fornecedor', {
  fornecedor_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  fornecedor_nome: { type: DataTypes.STRING, allowNull: false },
  fornecedor_contato: { type: DataTypes.STRING },
  fornecedor_endereco: { type: DataTypes.STRING },
}, {
  tableName: 'fornecedor', // Define explicitamente o nome da tabela
  timestamps: false // Se não há colunas `createdAt` e `updatedAt`
});

module.exports = Fornecedor;