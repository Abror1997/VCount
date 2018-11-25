import types from '../../actions/types'
const login = types.user.login

const initialState = {
  loading: false,
  error: null,
  data: {
    isAuth: undefined,
    token: undefined
  }
}

export default (state=initialState, action) => {
  
  switch(action.type) {
    case login.started: {
      return {
        ...state,
        loading: true
      }
    }
    case login.failure: {
      const {error} = action.payload
      return {
        ...state,
        loading: false,
        error
      }
    }
    case login.success: {
      const {isAuth, token} = action.payload
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          ...state.data,
          isAuth,
          token
        }
      }
    }
    default:
      return state
  }
}