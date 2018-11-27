import axios from 'axios'
import qs from 'qs'
import { Message, Loading } from 'element-ui'

// 响应时间
axios.defaults.timeout = 5000 * 1000
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 配置接口地址
axios.defaults.baseURL = 'http://localhost:3000/api'
var loadingInstance
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    console.log(config)
    let target = '#app'
    if (config.url.match('/login$')) {
      target = '#login'
    }
    loadingInstance = Loading.service({
      target: target,
      lock: true,
      text: '数据加载中，请稍后...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => {
    loadingInstance.close()
    Message.error('请求错误')
    return Promise.reject(err)
  }
)

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.data.code === 200) {
      loadingInstance.close()
      return res
    } else {
      loadingInstance.close()
      Message.error(res.data.msg)
    }
  },
  err => {
    console.log(err)
    loadingInstance.close()
    Message.error('请求失败，请稍后再试')
    return Promise.reject(err)
  }
)

// 发送请求
const post = function (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(axios.defaults.baseURL + url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}

const get = function (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(axios.defaults.baseURL + url, {
        params: params
      })
      .then(res => {
        console.log(res)
        resolve(res.data)
      })
      .catch(err => {
        console.log(err)
        reject(err.data)
      })
  })
}

export {
  post,
  get
}
