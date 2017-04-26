import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Homepage from './homepage';
import Login from './login';
import RetrivePwd from './retrive_pwd';
import Signup from './signup';
import Search from './search';
import Person from './person';
import auth from './auth';
import './index.css';
import {  browserHistory,  Router,  Route,  Link } from 'react-router';

const propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname:'/login/',  //如果没有登录，则跳转至该位置
            state: {nextPathname: '/'}  //期望是登录后跳转的位置
        })
    }
}

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Homepage}>
          <Route path="login" component={Login} />
          <Route path="retrive_pwd" component={RetrivePwd} />
          <Route path="signup" component={Signup} />
          <Route path="search" component={Search} />
          <Route path="person" component={Person} onEnter={requireAuth} />
        </Route>
      </Router>
    );
  }
}

export default App;
