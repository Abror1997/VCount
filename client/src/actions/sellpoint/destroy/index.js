import types from './types';
import { getToken } from '../../';
import axios from 'axios';

export default id => {
	return dispatch => {
		dispatch(started());

		axios
			.delete(`http://localhost:3001/api/sellpoint/destroy?id=${id}`, {
				headers: {
					'Content-Type': 'application/json',
					auth: getToken()
				}
			})
			.then(response => {
				if (response.data.success) dispatch(success());
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

const success = () => ({
	type: types.success
});

const failure = error => ({
	type: types.failure,
	payload: {
		error
	}
});
