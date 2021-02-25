import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import INDEX from '@/views/index'
import ARTICLE from '@/views/article'
import LOGIN from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login',
      name: 'LOGIN',
      component: LOGIN
    },{
      path: '/article',
      name: 'ARTICLE',
      component: ARTICLE
    },
    {
      path: '/index',
      name: 'INDEX',
      component: INDEX
    }
  ]
})
