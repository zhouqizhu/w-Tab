const express = require('express')
const cors = require('cors')
const app = express()

//解决跨域
app.use(cors())
//express内置了post参数解析
app.use(express.urlencoded({ extended: false }))

const apiRouter = require('./route/router')
app.use(apiRouter)

app.listen(3000, function () {
  console.log('app is runing at port 3000');
})