import React, { useState } from 'react';
import axios from 'axios';

export default function Login(props) {
  const [credentials, setCredentials] = useState({});

  const handleUpdate = e => setCredentials({...credentials, [e.target.name]: e.target.value});

  const login = e => {
    e.preventDefault();
    if(!credentials.username || !credentials.password) return; // ideally add an error message
    axios.post('http://localhost:5000/api/login', {'username': credentials.username, 'password': credentials.password})
      .then(res => {
        localStorage.setItem('userToken', res.data.payload);
        props.history.push('/friends');
        console.log(res.data);
      });
  };

  return (
      <div>
        <form name='Login'>
          <input name='username' value={credentials.username} placeholder='Username' onChange={handleUpdate} />
          <input name='password' value={credentials.password} placeholder='Password' onChange={handleUpdate} />
          <button onClick={login}>Login</button>
        </form>
      </div>
  );
}