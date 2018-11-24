
export default (api) => {
  return {
  
    login: (data) => {
      console.log('login', data)
      return api.post('/user/login', data)
    },
    register: (data) => {
      console.log('register', data)
      return api.post('/user/register', data)
    }
  }
}
