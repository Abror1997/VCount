const net = require('net');

const server = net.createServer(socket => {
  socket.write('You are now connected to tcp server\n');
  // socket.pipe(socket);
  const {localAddress, localPort, remoteAddress, remotePort} = socket
  console.log('loc_addr, loc_port', localAddress, localPort)
  console.log('rem_addr, rem_port', remoteAddress, remotePort)

  socket.on('data', (data) => {
    getData(data.toString)
    const response = {
      message: 'data received',
      data: data.toString()
    }
    // getData(response)
    socket.write(JSON.stringify(response))
  })
})

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
  listen,
  getData
}
