const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('client/build'))
app.use(bodyParser.json())

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to VCount project.',
}));

const server = http.Server(app)

const listen = (port) => {
  server.listen(port, () => {
    console.log('http server is running on port', port)
  })
}

module.exports = {
  connect: () => server,
  listen
}