const http = require('http')
const io = require('socket.io')

const httpServer = http.createServer()

const ioServer = io(httpServer, {
  path: '/'
})

const hall = () => ({
  guests: [],

  checkIn(id, nick) {
    this.guests.push({id, nick})
  },

  checkOut(id) {
    this.guests = this.guests.filter(guest => guest.id !== id)
  }
})

const serverHall = hall()

ioServer.on('connection', (client) => {

  client.on('check-in', (data) => {
    serverHall.checkIn(client.id, data.nick)
  })

  client.on('hall-scan', () => {
    client.emit('hall-scan:response', serverHall.guests)
  })

  client.on('disconnect', () => {
    serverHall.checkOut(client.id)
  })
})

httpServer.listen(3000, () => console.log('UP'))
