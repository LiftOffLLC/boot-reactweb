import thunkMiddleware from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
// import ContactList from './components/contactApp/ContactList';
import requireAuth from './components/auth/RequireAuth';
import Welcome from './components/welcome';
        // <Route path="contact-list" component={requireAuth(ContactList)}></Route>

export default  <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin}></Route>
        <Route path="signup" component={Signup}></Route>
        <Route path="signout" component={Signout}></Route>
      </Route>
