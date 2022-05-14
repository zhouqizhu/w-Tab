import axios from 'axios'

// 创建axios实例
const instance = axios.create({
    timeout: 10000,
})

// get请求
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

// post请求
export const post = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, { params }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}


