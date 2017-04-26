import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  browserHistory,
  Router,
  Route,
  Link,
} from 'react-router';

import Homepage from './homepage';
import Login from './login';
import RetrivePwd from './retrive_pwd';
import Signup from './signup';
import Search from './search';
import Person from './person';
import App from './app';
import LoginValid from './login_valid';
import auth from './auth';
import './index.css';

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname:'/app/login/',
            state: {nextPathname: '/'}
        })
    }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/app/login' component={LoginValid} />
    <Route path='/app' component={App} onEnter={requireAuth} />
    <Route path="/" component={Homepage}>
      <Route path="login" component={Login} />
      <Route path="retrive_pwd" component={RetrivePwd} />
      <Route path="signup" component={Signup} />
      <Route path="search" component={Search} />
      <Route path="person" component={Person} onEnter={requireAuth} />
    </Route>
  </Router>
), document.getElementById('container'))
