const httpServer = require('./http')
const tcpServer = require('./tcp')

httpServer.connect()
tcpServer.connect()



const port = process.env.PORT || 3001
httpServer.listen(port)
tcpServer.listen(8080)