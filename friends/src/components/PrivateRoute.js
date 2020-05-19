import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem("token");

  return (
    <Route {...rest} render={() => {return (token ? <Component/> : <Redirect to='/login'/>)}}/>
  );
}

export default PrivateRoute;
