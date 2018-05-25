const io = require('socket.io-client')('http://localhost:3000/')

io.on('connect', () => {
  console.log('Connect')
  io.emit('check-in', {nick: 'monkey'})
  io.emit('hall-scan')
})

io.on('hall-scan:response', (data) => {
  console.log(data)
})

io.on('disconnect', () => {
  console.log('Disco')
})

io.on('sup', () => console.log('Sup'))
