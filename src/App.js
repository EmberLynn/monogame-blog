import React, { Component } from 'react';
import './App.css';
import data from './data/data.json'

class App extends Component {
  
  render() {

  let jsondata = data.map((data) => {
    return <p>{data.content}</p>
  })

    return (
      <div className="App">
        <h1>Hello World</h1>
        {jsondata}
      </div>
    );
  }
}

export default App;
