

export default {
  development: {
    baseURL: "http://localhost:3001/api",
    headers: {
      "Content-Type": "application/json"
    }
  },
  production: {
    baseURL: "https://vcount.herokuapp.com/api",
    headers: {
      "Content-Type": "application/json"
    }
  } 
}