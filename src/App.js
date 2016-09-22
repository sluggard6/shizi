import React, { Component } from 'react';
import Answer from './answer';
import './App.css';
import 'csshake/dist/csshake.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="image">
          <img src="aa.jpg" alt="question"/>
        </div>
        <div className="answers">
          <div className="answer-column">
            <Answer value="日" right="1"/>
            <Answer value="月" right="0"/>
          </div>
          <div className="answer-column">
            <Answer value="水" right="0"/>
            <Answer value="火" right="0"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
