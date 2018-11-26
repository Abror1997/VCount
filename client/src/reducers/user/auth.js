import types from '../../actions/types'
const auth = types.user.auth

const initialState = {
  loading: false,
  error: null,
  data: {
    id: undefined,
    email: undefined,
    username: undefined
  }
}

export default (state=initialState, action) => {
  
  switch(action.type) {
    case auth.started: {
      return {
        ...state,
        loading: true
      }
    }
    case auth.failure: {
      const {error} = action.payload
      return {
        ...state,
        loading: false,
        error
      }
    }
    case auth.success: {
      const {id, email, username} = action.payload
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          ...state.data,
          id,
          email,
          username
        }
      }
    }
    default:
      return state
  }
}