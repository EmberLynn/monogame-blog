import React, { Component } from 'react';
import './App.css';
//import data from './data/data.json'
import { data } from './data/data'

class App extends Component {
  
  render() {

  let jsondata = (
    <div>
      {data.map((data) => {
        return <div><p>{data.content}</p><img src={data.image} alt="Something"/></div>
      })}
    </div>
  );

    return (
      <div className="App">
        <h1>Hello World</h1>
        {jsondata}
      </div>
    );
  }
}

export default App;
