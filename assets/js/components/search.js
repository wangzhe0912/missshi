import React, { Component } from 'react';

import { Form, Row, Col, Input, Button, Icon } from 'antd';
import ResultList from './result_list';

const FormItem = Form.Item;

class AdvancedSearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expand: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  handleReset() {
    this.props.form.resetFields();
  }

  toggle() {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };

    // To generate mock Form.Item
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i}>
          <FormItem {...formItemLayout} label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`)(
              <Input placeholder="placeholder" />
            )}
          </FormItem>
        </Col>
      );
    }

    const expand = this.state.expand;
    const shownCount = expand ? children.length : 6;
    return (
      <div>
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={40}>
          {children.slice(0, shownCount)}
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">Search</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              Collapse <Icon type={expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
      <ResultList />
      </div>
    );
  }
}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

class Search extends Component {
  render() {
    return (
      <WrappedAdvancedSearchForm />
    );
  }
}

export default Search;
