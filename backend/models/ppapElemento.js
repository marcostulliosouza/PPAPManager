// ./models/ppapElemento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const PPAP = require('./ppap');
const Elemento = require('./elemento');
const Versao = require('./versao');

const PPAPElemento = sequelize.define('PPAPElemento', {
  elemento_ppap_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  ppap_id: { type: DataTypes.INTEGER, references: { model: PPAP, key: 'ppap_id' } },
  elemento_id: { type: DataTypes.INTEGER, references: { model: Elemento, key: 'elemento_id' } },
  versao_id: { type: DataTypes.INTEGER, references: { model: Versao, key: 'versao_id' } },
  elemento_status: DataTypes.STRING
}, { tableName: "ppap_elemento_ppap", timestamps: false });

PPAPElemento.belongsTo(PPAP, { foreignKey: 'ppap_id' });
PPAPElemento.belongsTo(Elemento, { foreignKey: 'elemento_id' });
PPAPElemento.belongsTo(Versao, { foreignKey: 'versao_id' });

module.exports = PPAPElemento;