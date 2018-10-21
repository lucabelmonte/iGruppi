import React, { Component } from 'react';
import './Footer.css';
import {
    Col,
    Row,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

export default class Footer extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        return (
            <div className="Footer bg-dark">
                <Row>
                    <Col xs="3">
                            <NavLink href="https://github.com/iGruppi/iGruppi">GitHub</NavLink>
                    </Col>
                    <Col xs="6">
                            <NavbarBrand className="text-white" href="#">I GRUPPI</NavbarBrand>
                    </Col>
                    <Col xs="3">
                    <NavbarBrand className="text-white">I GRUPPI</NavbarBrand>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-white">GPL License I GRUPPI 2018</Col>
                </Row>
            </div>
        )
    }
}