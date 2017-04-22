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
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Homepage}>
      <Route path="login" component={Login} />
    </Route>
  </Router>
), document.getElementById('container'))
