import {Routines} from '../../api'

const initialState = {
  isAuth: false,
  
};

export default (state = initialState, action) => {
	switch (action.type) {
		case Routines.user.login.SUCCESS: {
      console.log('Routines.user.login.SUCCESS', action)
			const {isAuth} = action.payload
			return {
				...state,
				isAuth
			};
    }
    default:
      return state;
	}
	
};
