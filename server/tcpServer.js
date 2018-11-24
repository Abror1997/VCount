const net = require('net');
const {User} = require('./models')

const server = net.createServer(socket => {
  const json = {
    id: 123,
    data: {
      input: 'some input',
      output: 'some output'
    }
  }
  socket.write('You are now connected to tcp server\n' + JSON.stringify(json) + '\n');
  // socket.pipe(socket);
  const {localAddress, localPort, remoteAddress, remotePort} = socket
  console.log('loc_addr, loc_port', localAddress, localPort)
  console.log('rem_addr, rem_port', remoteAddress, remotePort)

  socket.on('data', (data) => {
    console.log('data', data.toString())
    const response = {
      message: 'data received',
      data: data.toString()
    }
    socket.write(JSON.stringify(response) + '\n')
  })
})

// const createUser = (data) => {
//   let json = data.to
// }

const listen = (port) => {
  server.listen(port, () => {
    console.log('tcp server is running on port:', port)
  })
}

const getData = (data) => {
  console.log('getData: ', data)
}

module.exports = {
  connect: () => server,
  listen
}
