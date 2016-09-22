import React, { Component } from 'react';
import './App.css';
import 'csshake/dist/csshake.css';

class Answer extends Component {
  render() {
    return (
      <div className="answer">{this.props.value}</div>
    );
  }
}

export default Answer;
