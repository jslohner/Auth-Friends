import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

function Login() {
  const [formInput, setFormInput] = useState({username: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const login = e => {
    e.preventDefault();
    setIsLoading(true);

    axiosWithAuth()
      .post('/api/login', formInput)
      .then(res => {
        setIsLoading(false);
        localStorage.setItem("token", res.data.payload);
        history.push('/friends');
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err.response);
      });
  };

  const onInputChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={login} className='login-form'>
      {isLoading && <h3>Logging in...</h3>}
      <input value={formInput.username} onChange={onInputChange} type='text' name='username' placeholder='Username'/>
      <input value={formInput.password} onChange={onInputChange} type='text' name='password' placeholder='Password'/>
      <button onClick={login}>Submit</button>
    </form>
  );
}

export default Login;
