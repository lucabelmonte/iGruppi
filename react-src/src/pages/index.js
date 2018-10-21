import React, { Component } from 'react';

import Header from './../component/Header';
import Footer from './../component/Footer';
import Slider from './../component/Slider';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';


export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div>
        <Header />
          <Slider/>
        <Footer />
      </div>
    );
  }
};

