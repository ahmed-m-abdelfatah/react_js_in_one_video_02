import { useEffect, useState } from 'react';
import axiosRequest from './services/axiosRequest.js';
import { usersServiceObject } from './services/serviceObjects.js';

export default function AppApi() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosRequest(usersServiceObject())
      .then(({ data: users }) => setUsers(users.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <h1 key={index}>{user.first_name}</h1>
      ))}
    </div>
  );
}
