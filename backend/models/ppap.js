// ./models/ppap.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Setor = require('./setor');
const Fornecedor = require('./fornecedor');
const Usuario = require('./usuario');

const PPAP = sequelize.define('PPAP', {
  ppap_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  ppap_nome: { type: DataTypes.STRING, allowNull: false },
  ppap_descricao: DataTypes.TEXT,
  ppap_status: DataTypes.STRING,
  setor_id: { type: DataTypes.INTEGER, references: { model: Setor, key: 'setor_id' } },
  fornecedor_id: { type: DataTypes.INTEGER, references: { model: Fornecedor, key: 'fornecedor_id' } },
  usu_id: { type: DataTypes.INTEGER, references: { model: Usuario, key: 'usu_id' } },
}, {
  timestamps: true,
  createdAt: 'ppap_data_criacao', // Nome personalizado para a coluna de criação
  updatedAt: 'ppap_data_atualizacao', // Nome personalizado para a coluna de atualização
  tableName: 'ppap' // Nome da tabela no banco de dados
});

PPAP.belongsTo(Setor, { foreignKey: 'setor_id' });
PPAP.belongsTo(Fornecedor, { foreignKey: 'fornecedor_id' });
PPAP.belongsTo(Usuario, { foreignKey: 'usu_id' });

module.exports = PPAP;