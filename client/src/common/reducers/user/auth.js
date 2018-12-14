import { Routines } from 'common/api';

const auth = Routines.user.auth;

const initialState = {
	loading: false,
	success: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case auth.TRIGGER: {
			return {
				...state,
				loading: true
			};
		}
		case auth.FAILURE: {
			return {
				...state,
				loading: false,
				success: false
			};
		}
		case auth.SUCCESS: {
			return {
				...state,
				loading: false,
				success: true
			};
		}
		default: {
			return state;
		}
	}
};
