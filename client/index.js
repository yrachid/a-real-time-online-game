const io = require('socket.io-client')('http://localhost:3000/')

io.on('connect', () => {
  console.log('Connect')
})

io.on('disconnect', () => {
  console.log('Disco')
})

io.on('sup', () => console.log('Sup'))

