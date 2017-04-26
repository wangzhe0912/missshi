import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

var auth = require('../auth')
const FormItem = Form.Item;

const contextTypes = {
    router: React.PropTypes.object.isRequired
};

class NormalLoginForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        auth.login(values.username, values.password, (loggedIn) => {
            if (loggedIn) {
                browserHistory.push('/')
            }
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{"margin-left": "auto", "margin-right": "auto"}}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名或邮箱" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <span className="login-form-forgot"><Link to="/retrive_pwd">找回密码</Link></span>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          Or
          <Link to="/signup">注册</Link>
        </FormItem>
      </Form>
      </div>
    );
  }
}
NormalLoginForm.contextTypes = contextTypes;
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

class Login extends Component{
  render() {
    return (
      <WrappedNormalLoginForm />
    )
  }
}

export default Login;
