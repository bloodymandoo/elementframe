import {post, get} from '@/axiosConfig/axiosConfig.js'

const login = (name, password) => {
  return post(
    '/user/login',
    {
      name: name,
      password: password
    }
  )
}

const register = (name, password, email) => {
  return get(
    '/user/register',
    {
      name: name,
      password: password,
      email: email
    }
  )
}

const getUserInfo = (userId) => {
  return get(
    '/user/getUserInfo',
    {
      _id: userId
    }
  )
}

export {
  login,
  register,
  getUserInfo
}
