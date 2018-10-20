import React, { Component } from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

export default class Register extends Component{
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
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Registrati ne I GRUPPI</ModalHeader>
        <ModalBody>
          <Input type="text" id="firstname" name="firstname" placeholder="Nome" />
          <Input type="text" id="surname" name="surname" placeholder="Cognome" />
          //Bisogna mettere il fatto che la provincia é formata da solo 2 lettere e deve essere controllata
          <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>Via</InputGroupText>
            </InputGroupAddon>
            <Input type="text" id="indirizzo" name="indirizzo" placeholder="Indirizzo" />
          </InputGroup>
          <Input type="text" id="localita" name="localita" placeholder="Localitá" />
          <Input type="text" id="provincia" name="provincia" placeholder="Provincia" />
          <Input type="email" id="username" name="username" placeholder="EMail" />
          <Input type="password" id="password" name="password" placeholder="Password" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.RegisterHandler}>Login</Button>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    }
};

