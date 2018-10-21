import React, { Component } from 'react';
import './App.css';
import './Header';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';


class App extends Component {
  constructor(props){
    super(props);

    let url = "http://localhost:8888/api/login";

    fetch(url, {mode: "cors"}).then(r => r.json())
      .then(data => console.log(data))
      .catch(e => console.log("Booo"))
    this.state = {
      isLogged : false
    }
  }
  render() {
    let isLogged = this.state.isLogger;
    return (
      <div className="App">
      {isLogged ? null : <Header/>}
      {isLogged ? null : <Landing/>}
      <Footer/>
      </div>
    );
  }
}

export default App;
