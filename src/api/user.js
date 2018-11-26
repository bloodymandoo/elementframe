import {post, get} from '@/axiosConfig/axiosConfig.js'

const login = (name, password) => {
  return post({
    url: '/user/login',
    params: {
      name: name,
      password: password
    }
  })
}

const register = (name, password, email) => {
  return get({
    url: '/user/register',
    params: {
      name: name,
      password: password,
      email: email
    }
  })
}

const getUserInfo = (userId) => {
  return get({
    url: '/user/getUserInfo',
    params: {
      _id: userId
    }
  })
}

export {
  login,
  register,
  getUserInfo
}
