import React from 'react';
import {
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardDeck,
	CardImg
} from 'reactstrap';

class Row2 extends React.Component {
	state = {};

	render() {
		return (
			<Row>
				row2
				<Col>
					col1
					<Card>
						<CardHeader>
							<h3>Companies</h3>
						</CardHeader>
						<CardBody>CardBody</CardBody>
						<CardFooter>CardFooter</CardFooter>
					</Card>
				</Col>
				<Col>col2</Col>
				<Col>col3</Col>
			</Row>
		);
	}
}

export default Row2;
