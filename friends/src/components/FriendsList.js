import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

import Friend from './Friend.js';

function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const getFriends = () => {
    setIsLoading(true);
    axiosWithAuth()
      .get(`/api/friends`)
      .then(res => {
        setIsLoading(false);
        setFriends(...friends, res.data);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err.response);
      });
  };

  const search = () => {
    history.push('/searchfriends');
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div className='friends-list'>
      <h2>Friends</h2>
      <button onClick={search}>Search</button>
      {isLoading && <h3>Loading Data...</h3>}
      {!isLoading && friends.length === 0 && <h3>There are no friends on your friends list</h3>}
      {!isLoading && friends && friends.map(friendData => {
        return <Friend key={friendData.id} friendData={friendData}/>
      })}
    </div>
  );
}

export default FriendsList;
