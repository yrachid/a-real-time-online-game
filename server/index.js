const http = require('http')
const io = require('socket.io')

const httpServer = http.createServer()

const ioServer = io(httpServer, {
  path: '/'
})

ioServer.on('connection', (client) => {
  console.log('New Connection')
  client.on('hello', (data) => {
    console.log(data)
  })
})

httpServer.listen(3000, () => console.log('UP'))

