import React from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	Table,
	Badge,
	Pagination,
	PaginationItem,
	PaginationLink
} from 'reactstrap';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../../actions';

class Row3 extends React.Component {
	state = {
		offset: 1,
		limit: 4
	};

	componentWillMount() {
		const { offset, limit } = this.state;
		this.props.getSellpoints({ offset, limit });
		console.log('ROW3 componentWillMount', this.props);
	}

	componentWillReceiveProps(nextProps) {
		const { offset, limit } = this.state;
		console.log('ROW3 componentWillReceiveProps', this.props);
		if (nextProps.loading) {
			nextProps.getSellpoints({ offset, limit });
		}
	}

	render() {
		console.log('ROW3 RENDER', this.props);
		return (
			<Card>
				<CardHeader>
					<i className='fa fa-align-justify' /> Sellpoints
				</CardHeader>
				<CardBody>
					<Table hover responsive size='sm'>
						<thead>
							<tr>
								<th>Name</th>
								<th>Address</th>
								<th>Phone Number</th>
								<th>Data registered</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{this.props.sellpoints.map((item, id) => (
								<tr key={id}>
									<td>{item.info.name}</td>
									<td>{item.info.address}</td>
									<td>{item.info.phoneNumber}</td>
									<td>{item.createdAt}</td>
									<td>
										<a
											className='btn'
											onClick={() => [
												console.log('DELETE', item.id),
												this.props.destroySellpoint(item.id)
											]}
										>
											<i className='cui-delete icons font-2xl d-block mt-4' />
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<Pagination>
						{/* {this.props} */}
						<PaginationItem>
							<PaginationLink previous tag='button' />
						</PaginationItem>
						<PaginationItem active>
							<PaginationLink tag='button'>1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink tag='button'>2</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink tag='button'>3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink tag='button'>4</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink next tag='button' />
						</PaginationItem>
					</Pagination>
				</CardBody>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.sellpoint.destroy.loading,
		sellpoints: state.sellpoint.get.data
	};
};

const mapDispatchToProps = dispatch => {
	return {
		destroySellpoint: id => dispatch(actions.sellpoint.destroy(id)),
		getSellpoints: query => dispatch(actions.sellpoint.get(query))
	};
};

Row3 = connect(
	mapStateToProps,
	mapDispatchToProps
)(Row3);

export default withRouter(Row3);
