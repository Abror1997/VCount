import types from '../../actions/types';
const register = types.user.register;

const initialState = {
	loading: false,
	error: null,
	data: {
		username: undefined
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case register.started: {
			return {
				...state,
				loading: true
			};
		}
		case register.failure: {
			const { error } = action.payload;
			return {
				...state,
				loading: false,
				error
			};
		}
		case register.success: {
			return {
				...state,
				loading: false,
				error: null,
				data: action.payload
			};
		}
		default:
			return state;
	}
};
