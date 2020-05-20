import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login.js';
import FriendsList from './components/FriendsList.js';
import SearchFriend from './components/SearchFriend.js';
import NewFriend from './components/NewFriend.js';
import EditFriend from './components/EditFriend.js';
import DeleteFriend from './components/DeleteFriend.js';
import PrivateRoute from './components/PrivateRoute.js';

function App() {
  return (
    <div className='App'>
      <Link to='/login'>Login</Link>
      <Link to='/friends'>Friends</Link>
      <Link to='/searchfriends'>Search Friends</Link>
      <Link to='/newfriend'>New Friend</Link>
      <Link to='/editfriend'>Edit Friend</Link>
      <Link to='/deletefriend'>Delete Friend</Link>
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute exact path='/friends' component={FriendsList}/>
        <PrivateRoute exact path='/searchfriends' component={SearchFriend}/>
        <PrivateRoute exact path='/newfriend' component={NewFriend}/>
        <PrivateRoute exact path='/editfriend' component={EditFriend}/>
        <PrivateRoute exact path='/deletefriend' component={DeleteFriend}/>
      </Switch>
    </div>
  );
}

export default App;
