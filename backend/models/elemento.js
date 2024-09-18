// ./models/elemento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Versao = require('./versao');

const Elemento = sequelize.define('Elemento', {
  elemento_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  elemento_nome: { type: DataTypes.STRING, allowNull: false },
  elemento_descricao: DataTypes.TEXT,
  elemento_obrigatorio: { type: DataTypes.BOOLEAN, defaultValue: true },
  versao_id: { type: DataTypes.INTEGER, references: { model: Versao, key: 'versao_id' } },
}, { tableName: "ppap_elemento", timestamps: false });

Elemento.belongsTo(Versao, { foreignKey: 'versao_id' });

module.exports = Elemento;