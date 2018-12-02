import types from '../../actions/types';
const auth = types.user.auth;

const initialState = {
	loading: false,
	error: null,
	data: {
		isAuth: false
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case auth.started: {
			return {
				...state,
				loading: true
			};
		}
		case auth.failure: {
			const { error } = action.payload;
			return {
				...state,
				loading: false,
				error
			};
		}
		case auth.success: {
			return {
				...state,
				loading: false,
				error: null,
				data: action.payload
			};
		}
		default: {
			return state;
		}
	}
};
