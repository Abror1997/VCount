const staticsBaseURL = 'http://example.com'

const urlS = {
  test: 'https://jsonplaceholder.typicode.com/',
  development: 'localhost:3001/',
  production: 'https://vcount.herokuapp.com/'
}

export default {
  staticsBaseURL,

  apisauce: {
    baseURL: 'localhost:3001/',
    headers: {
      'Accept': 'application/json',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    }
  },
}
