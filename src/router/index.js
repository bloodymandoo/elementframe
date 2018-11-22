import Vue from 'vue'
import Router from 'vue-router'
import Login from 'page/login/login'
import Container from 'page/baseContainer/container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Container
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Container',
      name: 'Container',
      component: Container
    }
  ]
})
