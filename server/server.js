const httpServer = require('./http')
const tcpServer = require('./tcp')

httpServer.connect()
tcpServer.connect()




httpServer.listen(3001)
tcpServer.listen(8080)