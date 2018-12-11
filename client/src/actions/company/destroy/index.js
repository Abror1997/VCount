import types from './types';
import { getToken } from '../../';
import axios from 'axios';

export default data => {
	return dispatch => {
		dispatch(started());

		axios
			.delete(`http://localhost:3001/api/company/destroy?id=${data.id}`, {
				headers: {
					'Content-Type': 'application/json',
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
