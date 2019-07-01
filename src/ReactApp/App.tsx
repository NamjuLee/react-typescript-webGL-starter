import React, { Component } from 'react';

import { Application } from '../Application';

class App extends Component {
  divStyle = {
    width: '100vw',
    height: '100vh'
  }
  constructor(props: {}) {
    super(props);
    
  }
  componentDidMount() {
    const app = new Application('main');
  }
  public render() {
    return (
      <div id ="main" style={this.divStyle}>
          
      </div>
    );
  }
}

export default App;
