import React, { Component } from 'react';
var auth = require('../auth')
import { browserHistory } from 'react-router';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {user:[]};
    this.contextTypes = {
        router: React.PropTypes.object.isRequired
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.loadUserData = this.loadUserData.bind(this);
  }

  componentDidMount() {
    this.loadUserData();
  }

  logoutHandler() {
    auth.logout();
    browserHistory.push('/app/login/');
  }

  loadUserData() {
    $.ajax({
        method: 'GET',
        url: '/api/users/i/',
        datatype: 'json',
        headers: {
            'Authorization': 'Token ' + localStorage.token
        },
        success: function(res) {
            this.setState({user: res});
        }.bind(this)
    })
  }

  render() {
    return (
      <h1>wangzhe</h1>
    );
  }
}

export default Person;
