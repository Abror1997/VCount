import types from './types';

import axios from 'axios';

export default data => {
	const { username, email, password } = data;
	return dispatch => {
		dispatch(started());

		axios
			.post(
				'http://localhost:3001/api/user/register',
				{
					username,
					email,
					password
				},
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)
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
