import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import App from './components/app';
import Welcome from './components/welcome';
import requireAuth from './components/auth/RequireAuth';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="signin" component={Signin}></Route>
    <Route path="signup" component={Signup}></Route>
    <Route path="signout" component={Signout}></Route>
  </Route>
)

