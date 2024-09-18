// ./models/usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');
const Setor = require('./setor');

const Usuario = sequelize.define('Usuario', {
  usu_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  usu_nome: { type: DataTypes.STRING, allowNull: false },
  usu_email: { type: DataTypes.STRING, allowNull: false, unique: true },
  usu_senha: { type: DataTypes.STRING, allowNull: false },
  usu_tipo: { type: DataTypes.ENUM('administrador', 'key_user', 'supervisor', 'consultor'), allowNull: false },
  setor_id: { type: DataTypes.INTEGER, references: { model: Setor, key: 'setor_id' } },
  usu_data_criacao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "usuario", timestamps: false });

Usuario.belongsTo(Setor, { foreignKey: 'setor_id' });

// Hook para criptografar a senha antes de salvar o usuário
Usuario.beforeCreate(async (usuario) => {
  const salt = await bcrypt.genSalt(10);
  usuario.usu_senha = await bcrypt.hash(usuario.usu_senha, salt);
});

// Método para verificar a senha
Usuario.prototype.verifyPassword = function (senha) {
  return bcrypt.compare(senha, this.usu_senha);
};

module.exports = Usuario;