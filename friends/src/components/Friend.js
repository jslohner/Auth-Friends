import React from 'react';

function Friend(props) {
  return (
    <div className='friend'>
      <h3>Name - {props.friendData.name}</h3>
      <p>ID - {props.friendData.id}</p>
      <p>Age - {props.friendData.age}</p>
      <p>Email - {props.friendData.email}</p>
    </div>
  );
}

export default Friend;
