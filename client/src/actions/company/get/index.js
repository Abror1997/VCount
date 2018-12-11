import types from './types';
import { getToken } from '../../';
import axios from 'axios';

export default () => {
	return dispatch => {
		dispatch(started());

		axios
			.get(`http://localhost:3001/api/company/get?order=asc`, {
				headers: {
					'Content-Type': 'application/json',
					auth: getToken()
				}
			})
			.then(response => {
				if (response.data.success) dispatch(success(response.data.result));
				else dispatch(failure(response.data));
			})
			.catch(error => {
				dispatch(failure(error));
			});
	};
};

const started = () => ({
	type: types.started
});

const success = payload => ({
	type: types.success,
	payload
});

const failure = payload => ({
	type: types.failure,
	payload
});
