import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers_files';
import BaseApp from './components/base';
import * as actionCreators from './actions';

const store = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware()
)(createStore)(rootReducer);

const App = connect(
  state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(BaseApp);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('container'))
