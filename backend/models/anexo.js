// ./models/anexo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const PPAP = require('./ppap');
const Versao = require('./versao');
const Elemento = require('./elemento');

const Anexo = sequelize.define('Anexo', {
  anexo_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  ppap_id: { type: DataTypes.INTEGER, references: { model: PPAP, key: 'ppap_id' } },
  versao_id: { type: DataTypes.INTEGER, references: { model: Versao, key: 'versao_id' } },
  elemento_id: { type: DataTypes.INTEGER, references: { model: Elemento, key: 'elemento_id' } },
  anexo_nome: { type: DataTypes.STRING, allowNull: false },
  anexo_url: { type: DataTypes.STRING },
  anexo_data: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, onUpdate: DataTypes.NOW }
}, { tableName: "ppap_anexo", timestamps: false });

Anexo.belongsTo(PPAP, { foreignKey: 'ppap_id' });
Anexo.belongsTo(Versao, { foreignKey: 'versao_id' });
Anexo.belongsTo(Elemento, { foreignKey: 'elemento_id' });

module.exports = Anexo;