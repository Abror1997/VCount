import React from 'react';

import Row1 from './row1';
import Row2 from './row2';
import Row3 from './row3';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Test extends React.Component {
	state = {};

	render() {
		return (
			<div className='animated fadeIn'>
				<Row1 />
				<Row2 />
				<Row3 />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {};
};

Test = connect(
	mapStateToProps,
	mapDispatchToProps
)(Test);

export default withRouter(Test);
