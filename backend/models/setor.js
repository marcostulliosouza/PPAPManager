// ./models/setor.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Setor = sequelize.define('Setor', {
  setor_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  setor_nome: { type: DataTypes.STRING, allowNull: false },
  setor_descricao: DataTypes.TEXT,
}, { tableName: "setor", timestamps: false });

module.exports = Setor;