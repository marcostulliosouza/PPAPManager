// ./models/versao.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const PPAP = require('./ppap');
const Usuario = require('./usuario');

const Versao = sequelize.define('Versao', {
  versao_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  ppap_id: { type: DataTypes.INTEGER, references: { model: PPAP, key: 'ppap_id' } },
  versao_numero: { type: DataTypes.INTEGER, allowNull: false },
  versao_data_criacao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  versao_descricao: DataTypes.TEXT,
  usu_id: { type: DataTypes.INTEGER, references: { model: Usuario, key: 'usu_id' } }
}, { tableName: "ppap_versao", timestamps: false });

Versao.belongsTo(PPAP, { foreignKey: 'ppap_id' });
Versao.belongsTo(Usuario, { foreignKey: 'usu_id' });

module.exports = Versao;