import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

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
      
       
      </div>
    );
  }
}

export default App;
