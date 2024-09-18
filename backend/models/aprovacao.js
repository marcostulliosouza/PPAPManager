// ./models/aprovacao.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const PPAP = require('./ppap');
const Versao = require('./versao');
const Usuario = require('./usuario');

const Aprovacao = sequelize.define('Aprovacao', {
  aprovacao_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  ppap_id: { type: DataTypes.INTEGER, references: { model: PPAP, key: 'ppap_id' } },
  versao_id: { type: DataTypes.INTEGER, references: { model: Versao, key: 'versao_id' } },
  usu_id: { type: DataTypes.INTEGER, references: { model: Usuario, key: 'usu_id' } },
  aprovacao_status: DataTypes.STRING,
  aprovacao_data: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  aprovacao_comentarios: DataTypes.TEXT
}, { tableName: "ppap_aprovacao", timestamps: false });

Aprovacao.belongsTo(PPAP, { foreignKey: 'ppap_id' });
Aprovacao.belongsTo(Versao, { foreignKey: 'versao_id' });
Aprovacao.belongsTo(Usuario, { foreignKey: 'usu_id' });

module.exports = Aprovacao;