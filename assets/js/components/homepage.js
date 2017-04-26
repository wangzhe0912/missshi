import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import React, { Component } from 'react';
import FooterConponent from './footer.js';
import HeaderConponent from './header.js';
import { browserHistory } from 'react-router';
var auth = require('../auth');

const contextTypes = {
    router: React.PropTypes.object.isRequired
};

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {user:[]};
    this.componentDidMount = this.componentDidMount.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.loadUserData = this.loadUserData.bind(this);
  }

  componentDidMount() {
    this.loadUserData();
  }

  logoutHandler() {
    auth.logout();
    browserHistory.push('/login/');
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
      <Layout>
        <Header style={{ position: 'fixed', width: '100%', opcacity:0 }}>
          <HeaderConponent />
        </Header>
        <Content style={{ padding: '20px 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
            {this.props.children}
          </div>
          <div>
          <h1>Your name is {this.state.user.username}</h1>
          </div>
          <button onClick={this.logoutHandler}>Log out</button>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <FooterConponent />
        </Footer>
      </Layout>
    );
  }
}
Homepage.contextTypes = contextTypes;
export default Homepage;
