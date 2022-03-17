import axios from 'axios'

// 创建axios实例
const instance = axios.create({ timeout: 10000 })

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}