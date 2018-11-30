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
      console.log('auth reducer started')
      return {
        ...state,
        loading: true
      }
    }
    case auth.failure: {
      console.log('auth reducer failure')      
      const {error} = action.payload
      return {
        ...state,
        loading: false,
        error
      }
    }
    case auth.success: {
      console.log('auth reducer success')
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
    default: {
      console.log('auth reducer default')      
      return state
    }
  }
}