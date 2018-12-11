import types from '../../actions/types';
const { destroy } = types.sellpoint;

const initialState = {
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case destroy.started: {
			return {
				...state,
				loading: true
			};
		}
		case destroy.failure: {
			const { error } = action.payload;
			return {
				...state,
				loading: false,
				error
			};
		}
		case destroy.success: {
			return {
				...state,
				loading: false,
				error: null
			};
		}
		default: {
			return state;
		}
	}
};
