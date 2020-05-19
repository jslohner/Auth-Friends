import React, { useState } from 'react';

function Login() {
  const [formInput, setFormInput] = useState({username: '', password: ''});


  const onInputChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className='login-form'>
      <input value={formInput.username} onChange={onInputChange} type='text' name='username' placeholder='Username'/>
      <input value={formInput.password} onChange={onInputChange} type='text' name='password' placeholder='Password'/>
    </form>
  );
}

export default Login;
