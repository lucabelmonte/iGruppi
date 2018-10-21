import React, { Component } from 'react';
import './App.css';
import './component/Header';
import Landing from './Landing';
import Index from './pages/index'

import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router';



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
    // axios.get("/api/login",{
    //   email:usr,
    //   passwd:psw
    // })
  }

  render() {
    let isLogged = this.state.isLogger;
    return (
      <Switch>
        <Route exact path='/' component={Index} />
      </Switch>
    );
  }
}

export default App;
