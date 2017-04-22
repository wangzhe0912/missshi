import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router';

class HeaderConponent extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    // alert(e.key);
    // alert(e.keyPath);
  }

  render() {
    return(
      <div>
      <div className="logo" />
      <div style={{ float: 'right'}}>
      <Menu onClick={this.handleClick.bind(this)}
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px'}}
      >
        <Menu.Item key="SignIn"><Link to="/login">登录</Link></Menu.Item>
        <Menu.Item key="Search">搜索</Menu.Item>
        <Menu.Item key="Notice">通知</Menu.Item>
        <Menu.Item key="Person">个人主页</Menu.Item>
      </Menu>
      </div>
      </div>
    );
  }
}

export default HeaderConponent;
