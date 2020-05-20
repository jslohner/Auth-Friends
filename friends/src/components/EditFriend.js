import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

function EditFriend() {
  const [formInput, setFormInput] = useState({targetFriend: '', targetField: '', fieldEdit: ''});
  const history = useHistory();

  const putFriend = () => {
    axiosWithAuth()
      .put(`/api/friends/${formInput.targetFriend}`, { [formInput.targetField]: formInput.fieldEdit })
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

  const editTargetFriend = e => {
    e.preventDefault();
    putFriend();
  };

  return (
    <div className='edit-friend-page'>
      <form onSubmit={editTargetFriend} className='edit-friend-form'>
        <input onChange={onInputChange} value={formInput.targetFriend} type='text' name='targetFriend' placeholder='Target Friend ID'/>
        <input onChange={onInputChange} value={formInput.targetField} type='text' name='targetField' placeholder='Target Field'/>
        <input onChange={onInputChange} value={formInput.fieldEdit} type='text' name='fieldEdit' placeholder='Field Edit'/>
        <button onClick={editTargetFriend}>Submit</button>
      </form>
    </div>
  );
}

export default EditFriend;
