import React, { Component } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardGroup,
	Col,
	Container,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row
} from 'reactstrap';

import { connect } from 'react-redux';
// import actions from '../../../actions';
// import { withRouter } from 'react-router-dom';
import { Routines } from 'common/api';

class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	loginHandler = () => {
		const { username, password } = this.state;
		Routines.user.login(
			{
				request: {
					username,
					password
				}
			},
			this.props.dispatch
		);
	};

	handleInputChange = (value, type) => {
		this.setState({ [type]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	componentWillMount() {
		let user = this.props.location.state && this.props.location.state.username;
		if (user) this.setState({ username: this.props.location.state.username });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.login.success) {
			this.props.history.push('/');
		}
	}

	render() {
		console.log('Login render', this.props);
		return (
			<div className='app flex-row align-items-center'>
				<Container>
					<Row className='justify-content-center'>
						<Col md='8'>
							<CardGroup>
								<Card className='p-4'>
									<CardBody>
										<Form onSubmit={this.handleSubmit}>
											<h1>Login</h1>
											<p className='text-muted'>Sign In to your account</p>
											<InputGroup className='mb-3'>
												<InputGroupAddon addonType='prepend'>
													<InputGroupText>
														<i className='icon-user' />
													</InputGroupText>
												</InputGroupAddon>
												<Input
													defaultValue={
														(this.props.location.state &&
															this.props.location.state.username) ||
														''
													}
													type='text'
													placeholder='Username'
													autoComplete='username'
													onChange={e =>
														this.handleInputChange(e.target.value, 'username')
													}
												/>
											</InputGroup>
											<InputGroup className='mb-4'>
												<InputGroupAddon addonType='prepend'>
													<InputGroupText>
														<i className='icon-lock' />
													</InputGroupText>
												</InputGroupAddon>
												<Input
													type='password'
													placeholder='Password'
													autoComplete='current-password'
													onChange={e =>
														this.handleInputChange(e.target.value, 'password')
													}
												/>
											</InputGroup>
											<Row>
												<Col xs='6'>
													<Button
														onClick={this.loginHandler}
														color='primary'
														className='px-4'
													>
														Login
													</Button>
												</Col>
												<Col xs='6' className='text-right'>
													<Button color='link' className='px-0'>
														Forgot password?
													</Button>
												</Col>
											</Row>
										</Form>
									</CardBody>
								</Card>
								<Card
									className='text-white bg-primary py-5 d-md-down-none'
									style={{ width: 44 + '%' }}
								>
									<CardBody className='text-center'>
										<div>
											<h2>Sign up</h2>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua.
											</p>
											<Button
												onClick={() => this.props.history.push('/register')}
												color='primary'
												className='mt-3'
												active
											>
												Register Now!
											</Button>
										</div>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { login } = state.user;
	return {
		login
	};
};

const mapDispatchToProps = dispatch => {
	return {
		// login: data => dispatch(actions.user.login(data))
	};
};

Login = connect(mapStateToProps)(Login);

export default Login;
