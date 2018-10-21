import React, { Component } from 'react';
import logo from './../logo.svg';
import './Header.css';
import Login from '../pages/Login';
import {Route} from 'react-router';
import {Link} from 'react-router-dom'
import Register from '../pages/Register';

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
					<NavLink to="/login">Login</NavLink>
					<Route path="/login" component={<Login loginHandler={this.props.logCallback}/>} />
				</NavItem>
				<NavItem>
					<NavLink><Link to="/register">Registrati</Link></NavLink>
            		<Route path="/register" component={Register} />
				</NavItem>
			</Nav>
		</Collapse>
		</Navbar>
		</div>
	);
	}
}


