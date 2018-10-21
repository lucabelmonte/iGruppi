import React, { Component } from 'react';

import Header from './../component/Header';
import Footer from './../component/Footer';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';


export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div>
        <Header />
          <h1>SWAG</h1>
        <Footer />
      </div>
    );
  }
};

