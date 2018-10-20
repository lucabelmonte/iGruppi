import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }

      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render(props){
      <div>
      <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Login I GRUPPI</ModalHeader>
        <ModalBody>
          <Input type="email" id="username" name="username" placeholder="EMail" />
          <Input type="password" id="password" name="password" placeholder="Password" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.LoginHandler}>Login</Button>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    }
};

