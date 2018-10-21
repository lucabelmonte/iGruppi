import React, { Component } from 'react';
import './Header.css';

import {
		Container,
		Row,
		Col
 } from 'reactstrap';

export default class DivCenter extends Component {

	render(props) {
	return (
		<Container>
			<Row>
				<Col md={{ size: this.props.size, offset: this.props.offset}}>
					{this.props.children}
				</Col>
			</Row>
		</Container>
	);
	}
}


