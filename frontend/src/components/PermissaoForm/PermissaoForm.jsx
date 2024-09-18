import React, { useState, useEffect } from 'react';

const PermissaoForm = ({ userId, currentPermission, onSave }) => {
  const [permission, setPermission] = useState(currentPermission);

  useEffect(() => {
    setPermission(currentPermission);
  }, [currentPermission]);

  const handleSave = () => {
    onSave(userId, permission);
  };

  return (
    <div>
      <h3>Editar Permissões</h3>
      <select
        value={permission}
        onChange={(e) => setPermission(e.target.value)}
      >
        <option value="view">Visualizar</option>
        <option value="edit">Editar</option>
        <option value="delete">Excluir</option>
        <option value="admin">Administrador</option>
      </select>
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default PermissaoForm;