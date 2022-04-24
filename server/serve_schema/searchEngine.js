const mongoose = require('../db/db')
const { Schema } = mongoose

const searchEngine = new Schema({
  _id: 'ObjectId',
  id: 'String',
  name: 'String',
  content: [{ label: 'String', url: 'String'}]
})

module.exports = mongoose.model('searchEngine', searchEngine, 'searchEngine')