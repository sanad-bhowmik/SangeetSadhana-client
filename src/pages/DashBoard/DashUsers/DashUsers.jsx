import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user._id}>{user.name}</div>
      ))}
    </div>
  );
};

export default DashUsers;
