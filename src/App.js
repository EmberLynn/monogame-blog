import React, { Component } from 'react';
import './App.css';
import { data } from './data/data'
import CardComponent from './CardComponent/CardComponent'
import SideBarCompnenet from './SideBarComponent/SideBarComponent'

class App extends Component {
  
  render() {

  let jsondata = (
    <div>
      {data.map((data) => {
        return <CardComponent
          content={data.content}
          image={data.image }/>
      })}
    </div>
  );

    return (
      <div className="App">
        <h1>Hello World</h1>
        <SideBarCompnenet/>
        {jsondata}
      </div>
    );
  }
}

export default App;
