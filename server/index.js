const express = require('express')
const cors = require('cors')
const app = express()

//解决跨域
app.use(cors())
//解析 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// 解析 application/json
app.use(express.json())

const apiRouter = require('./routes/router')
const authonUser = require('./routes/authentication.js')
app.use(apiRouter)
app.use(authonUser)

app.listen(3000, function () {
  console.log('app is runing at port 3000')
})