import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

import {connect} from 'react-redux'
import actions from '../../actions'
import {withRouter} from 'react-router-dom'

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
  AppSidebarNav,
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
    // this.props.auth(this.props.token)
    console.log('DefaultLayout componentWillMount', this.props)
    if(!this.props.token) {
      this.props.history.push('/login')
    } else {
      return (<Redirect from="/" to="/dashboard"/>)
    }
  }

  componentDidMount() { 
    console.log('DefaultLayout componentDidMount', this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log('DefaultLayout componentWillReceiveProps', nextProps)
  }

  render() {
    console.log('DefaultLayout render', this.props)
    console.log('DefaultLayout token', localStorage.getItem('token'))
    
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
          <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                {/* <Redirect from="/" to="/dashboard" /> */}
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
  return {
    token: state.login.data.token,
    user: state.auth.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    auth: (token) => dispatch(actions.user.auth(token))
  }
}

DefaultLayout = connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)

export default withRouter(DefaultLayout)