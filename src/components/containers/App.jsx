import React, { Component } from 'react';
import Menu from './Menu';
import Content from './Content';
class App extends Component {
  constructor(){
    super();
    this.state={
      contentHeaders:['Team A', 'Team B', 'Played At', 'Date']
    };
  }
  render() {
    return (
      <div>
        <Menu></Menu>
        <Content contentHeaders={this.state.contentHeaders}></Content>
      </div>
    );
  }
}

export default App;
