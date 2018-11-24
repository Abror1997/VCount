const httpServer = require('./httpServer')
const tcpServer = require('./tcpServer')

httpServer.connect()
tcpServer.connect()



const port = process.env.PORT || 3001
httpServer.listen(port)
tcpServer.listen(8080)