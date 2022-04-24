const mongoose = require('../db/db')
const { Schema } = mongoose

const siteContainer = new Schema({
  _id: 'ObjectId',
  id: 'String',
  name: 'String',
  icon: 'String',
  link: 'String'
})

module.exports = mongoose.model('siteContainer', siteContainer, 'siteContainer')