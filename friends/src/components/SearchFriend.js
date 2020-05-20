import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

import Friend from './Friend.js';

function SearchFriend(props) {
  const [friend, setFriend] = useState({});
  const [searchId, setSearchId] = useState('');

  const searchFriends = () => {
    axiosWithAuth()
      .get(`/api/friends/${searchId}`)
      .then(res => {
        setFriend(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const onInputChange = e => {
    setSearchId(e.target.value);
  };

  const search = e => {
    e.preventDefault();
    searchFriends();
  };

  return (
    <div className='search-friend-page'>
      <form onSubmit={search} className='search-form'>
        <input onChange={onInputChange} value={props.searchId} type='text' name='search' placeholder='Search'/>
        <button onClick={search}>Search</button>
      </form>
      {Object.keys(friend).length === 0 && <h3>Search for a Friend by ID</h3>}
      {Object.keys(friend).length > 0 && <Friend friendData={friend}/>}
    </div>
  );
}

export default SearchFriend;
