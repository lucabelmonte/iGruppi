import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
	DropdownItem,
	Badge
 } from 'reactstrap';

export default class Header extends Component {

	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
			this.state = {
				isOpen: false
			};
	}


	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}


	render() {
	return (
		<div>
		<Navbar className="header" color="dark" dark expand="lg">
			<NavbarBrand className="text-centered" href="/">
				<h1>IGRUPPI</h1>
			</NavbarBrand>
			<NavbarToggler onClick={this.toggle} />
			<Collapse isOpen={this.state.isOpen} navbar>
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink href="/components/">Login</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="https://github.com/reactstrap/reactstrap">Registrati</NavLink>
				</NavItem>
			</Nav>
		</Collapse>
		</Navbar>
		</div>
	);
	}
}


