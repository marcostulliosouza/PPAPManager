// src/pages/Permissoes/Permissoes.jsx
import React, { useEffect, useState } from 'react';
// import { getUsersWithPermissions, updateUserPermissions } from '../../services/api';
import PermissaoForm from '../../components/PermissaoForm/PermissaoForm';

const Permissoes = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Carregar usuários e suas permissões
    const fetchUsers = async () => {
      try {
        const response = await getUsersWithPermissions();
        setUsers(response);
      } catch (error) {
        console.error('Erro ao buscar permissões:', error);
      }
    };

    fetchUsers();
  }, []);

  const handlePermissionChange = (user) => {
    setSelectedUser(user);
  };

  const handleSavePermissions = async (userId, newPermission) => {
    try {
      await updateUserPermissions(userId, newPermission);
      // Atualizar a lista de usuários após a alteração
      const updatedUsers = users.map(user =>
        user.id === userId ? { ...user, permission: newPermission } : user
      );
      setUsers(updatedUsers);
      alert('Permissões atualizadas com sucesso!');
      setSelectedUser(null); // Fechar o formulário
    } catch (error) {
      console.error('Erro ao atualizar permissões:', error);
    }
  };

  return (
    <div>
      <h2>Gerenciamento de Permissões</h2>
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Permissão</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.permission}</td>
              <td>
                <button onClick={() => handlePermissionChange(user)}>
                  Editar Permissões
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <PermissaoForm
          userId={selectedUser.id}
          currentPermission={selectedUser.permission}
          onSave={handleSavePermissions}
        />
      )}
    </div>
  );
};

export default Permissoes;