import React, { Component } from 'react';
import './App.css';
import './Header';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);

    let url = "http://localhost:8888/api/login";

    fetch(url, {mode: "cors"}).then(r => r.json())
      .then(data => console.log(data))
      .catch(e => console.log("Booo"))
    this.state = {
      isLogged : false,
      logRes: null
    }

    this.getLoginData = this.getLoginData.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler(e){
    e.preventDefault();
    const c = e;
    this.getLoginData(c.username.value,c.password.value);
  }

  getLoginData(usr,psw){
    alert("ciao");
    axios.get("/api/login",{
      email:usr,
      passwd:psw
    })
  }

  render() {
    let isLogged = this.state.isLogger;
    return (
      <div className="App">
      {isLogged ? null : <Header logCallback={this.loginHandler}/>}
      {isLogged ? null : <Landing/>}
      <Footer/>
      </div>
    );
  }
}

export default App;
