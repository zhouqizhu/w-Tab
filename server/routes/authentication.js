const express = require('express')
const router = express.Router()
//引入密码加密模块
const bcrypt = require('bcrypt')
//引入生成token
const jwt = require('jsonwebtoken')
//引入数据库模块
const mongoose = require('mongoose')
//连接本地数据库
mongoose.connect('mongodb://localhost:27017/navData')
let db = mongoose.connection
let loginCollection = db.collection('authentication')
//注册
router.post('/register', (req, res) => {
  const { user_number, password } = req.body
  if (user_number && password) {
    // bcrypt.hashSync（密码，10位的盐）
    const hashPwd = bcrypt.hashSync(password, 10) // 使用bcrypt.hashSync方法生成密文密码
    //hashPwd随机生成的密文密码  $2b$10$jE1hhza0EZaxOyf9RtGVk.m79cA9CKt1Qnmony8cd7xzHoz95JlJq
    let obj = { user_number, password: hashPwd }
    //给login表插入要增加的内容
    //插入的密码是经过加密的，这样就算程序员也不知道密码是多少，保密性
    loginCollection.insertOne(obj, (err, result) => {
      if (result) {
        res.send({
          msg: '注册成功'
        })
      } else {
        res.send({
          msg: '注册失败'
        })
      }
    })

  } else {
    res.send({
      code: '111111',
      msg: '参数错误'
    })
  }
})

//登录
router.post('/login', (req, res) => {
  const { user_number, password } = req.body
  if (user_number && password) {
    //从表中查询账号
    // console.log(loginCollection)
    loginCollection.findOne({ user_number }, (err, data) => {
      if (data) {
        // 对比校验原始密码和加密后的密码
        const isPwdValid = bcrypt.compareSync(password, data.password)
        if (isPwdValid) {
          //如果密码正确， 生成token
          let token = jwt.sign(data, 'wx', { expiresIn: 10* 1 });
          res.send({
            msg: '登录成功',
            token: token,
            success:true,
            data:data
          })
        } else {
          res.send({
            msg: '密码错误',
            success:false,
          })
        }
      }else{
        res.send({
          msg: '该用户不存在，请注册',
          success:false,
        })
      }
    })


  } else {
    res.send({
      success:false,
      msg: '参数错误'
    })
  }
})
module.exports = router