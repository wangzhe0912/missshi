import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers_files';
import {
  browserHistory,
  Router,
  Route,
  Link,
} from 'react-router';

import Homepage from './components/homepage';
import Login from './components/login';
import RetrivePwd from './components/retrive_pwd';
import Signup from './components/signup';
import Search from './components/search';
import Person from './components/person';
import App from './app';
import LoginValid from './login_valid';
import auth from './auth';
import './index.css';

const store = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware()
)(createStore)(rootReducer);


function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname:'/app/login/',
            state: {nextPathname: '/'}
        })
    }
}

ReactDOM.render((
  <Provider store={store}>
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
  </Provider>
), document.getElementById('container'))
