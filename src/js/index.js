import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        React component!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
