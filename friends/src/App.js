import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login.js';
import FriendsList from './components/FriendsList.js';
import SearchFriend from './components/SearchFriend.js';
import NewFriend from './components/NewFriend.js';
import PrivateRoute from './components/PrivateRoute.js';

function App() {
  return (
    <div className='App'>
      <Link to='/login'>Login</Link>
      <Link to='/friends'>Friends</Link>
      <Link to='/searchfriends'>Search Friends</Link>
      <Link to='/newfriend'>New Friend</Link>
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute exact path='/friends' component={FriendsList}/>
        <PrivateRoute exact path='/searchfriends' component={SearchFriend}/>
        <PrivateRoute exact path='/newfriend' component={NewFriend}/>
      </Switch>
    </div>
  );
}

export default App;
