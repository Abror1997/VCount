import types from '../../actions/types'
const register = types.user.register

const initialState = {
  loading: false,
  error: null,
  data: {
    id: undefined,
    username: undefined
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
      const {id, username} = action.payload
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          ...state.data,
          id,
          username
        }
      }
    }
    default:
      return state
  }
}