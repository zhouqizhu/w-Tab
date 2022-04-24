const mongoose = require('mongoose')

const IP = 'localhost'
const PORT = 27017
const DB_NAME = 'org'

//连贯
mongoose.connect(`mongodb://localhost:27017/navData`, {
  useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection success')
})

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:' + err)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected')
})

module.exports = mongoose