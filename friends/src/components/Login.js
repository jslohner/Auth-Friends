import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

function Login() {
  const [formInput, setFormInput] = useState({username: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onInputChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('/api/login', formInput)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        history.push('/friends');
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <form onSubmit={login} className='login-form'>
      <input value={formInput.username} onChange={onInputChange} type='text' name='username' placeholder='Username'/>
      <input value={formInput.password} onChange={onInputChange} type='text' name='password' placeholder='Password'/>
      <button onClick={login}>Submit</button>
    </form>
  );
}

export default Login;
