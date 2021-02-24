import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import INDEX from '@/views/index'
import ARTICLE from '@/views/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
