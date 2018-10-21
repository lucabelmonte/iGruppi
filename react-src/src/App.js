import React, { Component } from 'react';
import './App.css';
import './component/Header';

import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router';

//PAGES
import Landing from './Landing';
import Index from './pages/index';
import Login from './pages/Login';

class App extends Component {
  constructor(props){
    super(props);

    // let url = "http://localhost:8888/api/login";

    // fetch(url, {mode: "cors"}).then(r => r.json())
    //   .then(data => console.log(data))
    //   .catch(e => console.log("Booo"))
    // this.state = {
    //   isLogged : false,
    //   logRes: null
    // }

    this.state = {
      isLogged: false
    }
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={this.state.isLogged ? Landing : Index} />
          <Route exact path='/login' component={(props)=> {
            return (<Login />)
          }} />
        </Switch>
      </BrowserRouter>
     
    );
  }
}

export default App;
