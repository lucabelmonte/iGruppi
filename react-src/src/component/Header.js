import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
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
					<NavLink to="/login">Login</NavLink>
				</NavItem>
				<NavItem>
					<NavLink><Link to="/register">Registrati</Link></NavLink>
				</NavItem>
			</Nav>
		</Collapse>
		</Navbar>
		</div>
	);
	}
}


