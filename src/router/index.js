import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import webpackage from '@/components/webpackage'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/web-paketleri',
      name: 'webpackage',
      component: webpackage
    },
    {
      path: '/iletisim',
      name: 'contact',
      component: contact
    }
  ]
})
