import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

import { connect } from 'react-redux';
// import actions, { getToken } from '../../actions';
// import { withRouter } from 'react-router-dom';
import { Routines } from 'common/api';

import {
	AppAside,
	AppBreadcrumb,
	AppFooter,
	AppHeader,
	AppSidebar,
	AppSidebarFooter,
	AppSidebarForm,
	AppSidebarHeader,
	AppSidebarMinimizer,
	AppSidebarNav
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

class DefaultLayout extends Component {
	componentWillMount() {
		console.log('DefaultLayout componentWillMount', this.props);
		Routines.user.auth(null, this.props.dispatch);
	}

	componentDidMount() {
		console.log('DefaultLayout componentDidMount', this.props);
	}

	componentWillReceiveProps(nextProps) {
		const { loading, success } = nextProps.auth;
		console.log(
			'DefaultLayout componentWillReceiveProps',
			this.props,
			nextProps
		);
		if (loading) {
			console.log('Loading');
		} else {
			if (success) {
				console.log('auth success');
			} else {
				console.log('auth failed');
				this.props.history.push('/login');
			}
		}
	}

	render() {
		console.log('DefaultLayout render', this.props);

		return (
			<div className='app'>
				<AppHeader fixed>
					<DefaultHeader />
				</AppHeader>
				<div className='app-body'>
					<AppSidebar fixed display='lg'>
						<AppSidebarHeader />
						<AppSidebarForm />
						<AppSidebarNav navConfig={navigation} {...this.props} />
						<AppSidebarFooter />
						<AppSidebarMinimizer />
					</AppSidebar>
					<main className='main'>
						<AppBreadcrumb appRoutes={routes} />
						<Container fluid>
							<Switch>
								{routes.map((route, idx) => {
									return route.component ? (
										<Route
											key={idx}
											path={route.path}
											exact={route.exact}
											name={route.name}
											render={props => <route.component {...props} />}
										/>
									) : null;
								})}
								{/* <Redirect from='/' to='/dashboard' /> */}
							</Switch>
						</Container>
					</main>
					<AppAside fixed>
						<DefaultAside />
					</AppAside>
				</div>
				<AppFooter>
					<DefaultFooter />
				</AppFooter>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { login, auth } = state.user;
	return {
		login,
		auth
	};
};

// const mapDispatchToProps = dispatch => {
// 	return {
// 		auth: () => dispatch(actions.user.auth())
// 	};
// };

DefaultLayout = connect(mapStateToProps)(DefaultLayout);

export default DefaultLayout;
