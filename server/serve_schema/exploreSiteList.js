const mongoose = require('../db/db')
const { Schema } = mongoose

const exploreSiteList = new Schema({
  _id: 'ObjectId',
  name: 'String',
  href: 'String'
})

module.exports = mongoose.model('exploreSiteList', exploreSiteList, 'exploreSiteList')