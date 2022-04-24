const mongoose = require('../db/db')
const { Schema } = mongoose

const siteDrawerListLeft = new Schema({
  _id: 'ObjectId',
  id: 'String',
  name: 'String',
  links: [{ name: 'String', logo: 'String', link: 'String'}]
})

module.exports = mongoose.model('siteDrawerListLeft', siteDrawerListLeft, 'siteDrawerListLeft')