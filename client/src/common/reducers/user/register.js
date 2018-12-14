import { Routines } from 'common/api';

const register = Routines.user.register;

const initialState = {
	loading: false,
	success: null,
	data: {
		username: undefined
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case register.TRIGGER: {
			return {
				...state,
				loading: true
			};
		}
		case register.FAILURE: {
			return {
				...state,
				loading: false,
				success: false
			};
		}
		case register.SUCCESS: {
			return {
				...state,
				loading: false,
				success: true,
				data: action.payload.response
			};
		}
		default:
			return state;
	}
};
