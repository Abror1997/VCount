import types from '../../actions/types'
const register = types.user.register

const initialState = {
  loading: false,
  error: null,
  data: {
    id: undefined,
    email: undefined
  }
}

export default (state=initialState, action) => {
  
  switch(action.type) {
    case register.started: {
      return {
        ...state,
        loading: true
      }
    }
    case register.failure: {
      const {error} = action.payload
      return {
        ...state,
        loading: false,
        error
      }
    }
    case register.success: {
      const {id, email} = action.payload
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          ...state.data,
          id,
          email
        }
      }
    }
    default:
      return state
  }
}