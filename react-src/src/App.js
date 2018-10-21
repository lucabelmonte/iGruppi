import React, { Component } from 'react';
import './App.css';
import './Header';
import Header from './Header';


class App extends Component {
  constructor(props){
    super(props);

    let url = "http://localhost:8888/api/login";

    fetch(url, {mode: "cors"}).then(r => r.json())
      .then(data => console.log(data))
      .catch(e => console.log("Booo"))
  }
  render() {
    return (
      <div className="App">
      <Header/>
      
      
      </div>
    );
  }
}

export default App;
