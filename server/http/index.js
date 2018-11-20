const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()



app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/post', (req, res) => {
  console.log('post data:', req.body)
  res.status(200).send({
    success: true,
    result: req.body
  })

  

})

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