import { Routines } from 'common/api';

const login = Routines.user.login;

const initialState = {
	loading: false,
	success: null,
	data: {
		token: undefined
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case login.TRIGGER: {
			return {
				...state,
				loading: true
			};
		}
		case login.FAILURE: {
			return {
				...state,
				loading: false,
				success: false
			};
		}
		case login.SUCCESS: {
			return {
				...state,
				loading: false,
				success: true,
				data: action.payload.response
			};
		}
		// case logout.success: {
		// 	return {
		// 		...state,
		// 		data: action.payload
		// 	};
		// }
		default:
			return state;
	}
};
