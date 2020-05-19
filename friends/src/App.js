import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login.js';
import FriendsList from './components/FriendsList.js';
import PrivateRoute from './components/PrivateRoute.js';

function App() {
  return (
    <div className='App'>
      <Link to='/login'>Login</Link>
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute exact path='/friends' component={FriendsList}/>
      </Switch>
    </div>
  );
}

export default App;
