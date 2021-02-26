import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import INDEX from '@/views/index'
import ARTICLE from '@/views/article'
import LOGIN from '@/views/login'
import QUESTION from '@/views/question'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return {x: 0, y: 0};
  },
  routes: [
    {
      path: '/',
      name: 'INDEX',
      component: INDEX
    }, {
      path: '/login',
      name: 'LOGIN',
      component: LOGIN
    },{
      path: '/article',
      name: 'ARTICLE',
      component: ARTICLE
    },{
      path: '/question',
      name: 'QUESTION',
      component: QUESTION
    },
    {
      path: '/index',
      name: 'INDEX',
      component: INDEX
    }
  ]
})
