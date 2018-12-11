import React, { Component } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Col,
	Container,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row,
	Label
} from 'reactstrap';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import actions from '../../../actions';

class Register extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	inputHandler(type, value) {
		this.setState({ [type]: value });
	}

	createHandler = () => {
		this.props.register(this.state);
	};

	componentWillReceiveProps(nextProps) {
		const data = nextProps.data;
		if (data.id) {
			this.props.history.push('/login', {
				id: data.id,
				username: data.username
			});
		}
	}

	render() {
		return (
			<div className='app flex-row align-items-center'>
				<Container>
					<Row className='justify-content-center'>
						<Col md='6'>
							<Card className='mx-4'>
								<CardBody className='p-4'>
									<Form>
										<h1>Register</h1>
										<p className='text-muted'>Create your account</p>
										{this.props.loading ? <Label>Loading</Label> : null}
										<InputGroup className='mb-3'>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<i className='icon-user' />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												onChange={event =>
													this.inputHandler('username', event.target.value)
												}
												type='text'
												placeholder='Username'
												autoComplete='username'
											/>
										</InputGroup>
										<InputGroup className='mb-3'>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>@</InputGroupText>
											</InputGroupAddon>
											<Input
												onChange={event =>
													this.inputHandler('email', event.target.value)
												}
												type='text'
												placeholder='Email'
												autoComplete='email'
											/>
										</InputGroup>
										<InputGroup className='mb-3'>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<i className='icon-lock' />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												onChange={event =>
													this.inputHandler('password', event.target.value)
												}
												type='password'
												placeholder='Password'
												autoComplete='new-password'
											/>
										</InputGroup>
										<InputGroup className='mb-4'>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<i className='icon-lock' />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												onChange={event =>
													this.inputHandler(
														'confirmPassword',
														event.target.value
													)
												}
												type='password'
												placeholder='Repeat password'
												autoComplete='new-password'
											/>
										</InputGroup>
										<Button onClick={this.createHandler} color='success' block>
											Create Account
										</Button>
									</Form>
								</CardBody>
								<CardFooter className='p-4'>
									<Row>
										<Col xs='12' sm='6'>
											<Button className='btn-facebook' block>
												<span>facebook</span>
											</Button>
										</Col>
										<Col xs='12' sm='6'>
											<Button className='btn-twitter' block>
												<span>twitter</span>
											</Button>
										</Col>
									</Row>
								</CardFooter>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { loading, error, data } = state.user.register;
	return {
		loading,
		error,
		data
	};
};

const mapDispatchToProps = dispatch => {
	return {
		register: data => dispatch(actions.user.register(data))
	};
};

Register = connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);

export default withRouter(Register);
