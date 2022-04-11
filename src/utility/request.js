import axios from 'axios'

// 创建axios实例
const instance = axios.create({
    timeout: 10000,
    headers: {
      'Content-Type': "contentType",
      "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,  
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
