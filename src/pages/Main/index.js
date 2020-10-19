import React, { useState, useEffect } from 'react';

import { Container, User } from './styles';
import api from '../../services/api';


export default function Dashboard() {
  const [users, setUsers] = useState([]);



  useEffect(() => {
    async function loadUsers() {

      const response = await api.get('users');



      setUsers(response.data);
    }

    loadUsers();
  }, []);

  return (
    <Container>

      <ul>
        {users.map(user => (
          <User key={user.id}>
            <strong>{user.name}</strong>
            <span>
              {user.email}
            </span>
            <span>
              {user.telephone_number}
            </span>
          </User>
        ))}
      </ul>
    </Container>
  );
}