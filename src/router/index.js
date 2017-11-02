import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import welcomePage from '@/components/welcomePage'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'welcome',
      component: welcomePage
    }, {
      path: '/',
      name: 'main',
      component: main
    }
  ]
})
