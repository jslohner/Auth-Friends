import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

function NewFriend() {
  const [formInput, setFormInput] = useState({name: '', age: '', email: ''});
  const history = useHistory();

  const postNewFriend = () => {
    axiosWithAuth()
      .post('/api/friends', formInput)
      .then(res => {
        history.push('/friends');
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const onInputChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  const createNewFriend = e => {
    e.preventDefault();
    postNewFriend();
  };

  return (
    <div className='new-friend-page'>
      <form onSubmit={createNewFriend} className='new-friend-form'>
        <input onChange={onInputChange} value={formInput.name} type='text' name='name' placeholder='Name'/>
        <input onChange={onInputChange} value={formInput.age} type='text' name='age' placeholder='Age'/>
        <input onChange={onInputChange} value={formInput.email} type='text' name='email' placeholder='Email'/>
        <button onClick={createNewFriend}>Submit</button>
      </form>
    </div>
  );
}

export default NewFriend;
