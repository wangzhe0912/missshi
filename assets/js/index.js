import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('container'))
