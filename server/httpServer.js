const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const models = require('./models')
const app = express()

app.use(express.static('client/build'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/api/device/data/send', (req, res) => {
  // console.log('data', req.body)
  console.log('device id: ', req.body.id)
  console.log('device data: ', req.body.data)
  res.status(200).send({
    success: true,
    message: 'data received'
  })
})

require('./routes/user')(app)
require('./routes/device')(app)

const server = http.Server(app)

const listen = (port=3001, host='localhost') => {
  models.sequelize.sync({force: true})
    .then(promise => {
      server.listen(port, host, () => {
        console.log('http server is running on port', port)
      })
    })
}


module.exports = {
  connect: () => server,
  listen
}