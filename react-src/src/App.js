import React, { Component } from 'react';
import './App.css';
import './component/Header';

import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router';

import { instanceOf } from 'prop-types';

import cookie from 'react-cookies'


//PAGES
import Landing from './Landing';
import Index from './pages/index';
import Login from './pages/Login';
import Register from './pages/Register';


class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      isLogged: cookie.load('isLogged') || false,
      token: cookie.load('token') || null,
      error: null
    }

    this.loginHandler = this.loginHandler.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  loginHandler(e){
    e.preventDefault();
    const {email, password} = e.target;

    fetch(`http://localhost:8888/api/login?email=${email.value}&passwd=${password.value}`)
    .then(res => res.json())
    .then(data => {
      const {status, token, error} = data;
      if(status === "OK"){
        cookie.save('isLogged', true, {path: '/'});
        cookie.save('token', token, { path: '/' })

        this.setState({
          isLogged: true,
          token
        })
        window.location = '/';
      } else {
        this.setState({
          error
        });
      }
      
      console.log(data);
    })
    // console.log(email.value + "  " + password.value);
    // window.location = '/';
  }

  getUserData(){
    fetch(`http://localhost:8888/api/user?token=${this.state.token}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  logOut(){
    if(this.state.isLogged){
      cookie.remove('isLogged');
      cookie.remove('token');
      window.location = '/';
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={props => {
            if(this.state.isLogged)
              return (
                <Index state={this.state} all={this}/>
              );
            else return (
              <Landing/>
            )
          }} />
          <Route exact path='/login' component={(props) => <Login loginHandler={this.loginHandler} logOut={this.logOut} error={this.state.error}/>}/>
          <Route exact path='/register' component={Register} />

          <Route path="/logout" render={props => {
            this.logOut();
          }}/>
        </Switch>
      </BrowserRouter>
     
    );
  }
}

export default App;
