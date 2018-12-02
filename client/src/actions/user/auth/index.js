import types from './types';
import config from '../../config';
import { getToken } from '../../';
import axios from 'axios';

export default token => {
	return dispatch => {
		dispatch(started());

		axios
			.get('http://localhost:3001/api/user/auth', {
				headers: {
					...config.headers,
					auth: getToken()
				}
			})
			.then(response => {
				if (response.data.success) dispatch(success(response));
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

const success = response => ({
	type: types.success,
	payload: response.data
});

const failure = error => ({
	type: types.failure,
	payload: {
		error
	}
});
