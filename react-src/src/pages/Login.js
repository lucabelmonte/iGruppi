import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form  } from 'reactstrap';
import Register from './Register';
import {Route} from 'react-router';
import {Link} from 'react-router-dom'

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: true
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

      handleSubmit(event){

        alert("cd");
        this.props.loginHandler(event);
        this.toggle();
      }

    render(props){
      return(

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login I GRUPPI</ModalHeader>
          <Form id="log-form">
            <ModalBody>
                <Input type="text" id="username" name="username" placeholder="Email" />
                <Input type="password" id="password" name="password" placeholder="Password" />
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.handleSubmit} color="primary">Login</Button>
              <Button color="secondary" onClick={this.toggle}>Chiudi</Button>
              <div className="g-signin2" data-onsuccess="onSignIn"></div>
              <p>oppure <Link to="/register">Registrati</Link></p>
              <Route path="/register" component={Register} />
            </ModalFooter>
          </Form>
        </Modal>
      )
    }
};

