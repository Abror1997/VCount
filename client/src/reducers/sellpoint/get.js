import types from '../../actions/types';
const { get } = types.sellpoint;

const initialState = {
	loading: false,
	error: null,
	data: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case get.started: {
			return {
				...state,
				loading: true
			};
		}
		case get.failure: {
			const { error } = action.payload;
			return {
				...state,
				loading: false,
				error
			};
		}
		case get.success: {
			console.log('sellpoint get success', action.payload);
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
