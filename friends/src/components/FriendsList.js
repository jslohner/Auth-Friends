import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

import Friend from './Friend.js';

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        setFriends(...friends, res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className='friends-list'>
      <h2>Friends</h2>
      {friends.map(friendData => {
        console.log(friendData);
        return <Friend key={friendData.id} friendData={friendData}/>
      })}
    </div>
  );
}

export default FriendsList;
