import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import React, { Component } from 'react';
import FooterConponent from './footer.js';
import HeaderConponent from './header.js';

class Homepage extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', width: '100%', opcacity:0 }}>
          <HeaderConponent />
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <FooterConponent />
        </Footer>
      </Layout>
    );
  }
}

export default Homepage;
