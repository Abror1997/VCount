import types from '../../actions/types';
const login = types.user.login;
const logout = types.user.logout;
const initialState = {
	loading: false,
	error: null,
	data: {
		token: undefined
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case login.started: {
			return {
				...state,
				loading: true
			};
		}
		case login.failure: {
			const { error } = action.payload;
			return {
				...state,
				loading: false,
				error
			};
		}
		case login.success: {
			return {
				...state,
				loading: false,
				error: null,
				data: action.payload
			};
		}
		case logout.success: {
			return {
				...state,
				data: action.payload
			};
		}
		default:
			return state;
	}
};
