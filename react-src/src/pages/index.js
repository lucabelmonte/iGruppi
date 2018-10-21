import React, { Component } from 'react';

import Header from './../component/Header';
import Footer from './../component/Footer';

import { instanceOf } from 'prop-types';

import cookie from 'react-cookies'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';



export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }

  render(props) {
    this.props.all.getUserData();
    return (
      <div>
        <Header />
          <h1>SWAG</h1>
          {
          this.state.isLogged ? <h1>Loggato</h1> : <h1>Non loggato</h1>
          }
        <Footer />
      </div>
    );
  }
};

