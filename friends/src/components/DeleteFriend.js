import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

function DeleteFriend() {
  const [formInput, setFormInput] = useState({targetFriend: ''});
  const history = useHistory();

  const deleteFriend = () => {
    axiosWithAuth()
      .delete(`/api/friends/${formInput.targetFriend}`)
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

  const deleteTargetFriend = e => {
    e.preventDefault();
    deleteFriend();
  };

  return (
    <div className='delete-friend-page'>
      <form onSubmit={deleteTargetFriend} className='delete-friend-form'>
        <input onChange={onInputChange} value={formInput.targetFriend} type='text' name='targetFriend' placeholder='Target Friend ID'/>
        <button onClick={deleteTargetFriend}>Delete</button>
      </form>
    </div>
  );
}

export default DeleteFriend;
