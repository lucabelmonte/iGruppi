import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import Header from './../component/Header';
import Footer from './../component/Footer';
import Center from '../component/DivCenter';



export default class Login extends Component{
    render(){
      return(
        <div>
          <Header />
          <Center size={8} offset={2}>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              
              <Button>Submit</Button>
            </Form>
          </Center>
          <Footer />
        </div>
      );
    }
};

