import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import welcomePage from '@/components/welcomePage'
// import main from '@/components/main'
import foo from '@/components/foo'
import bar from '@/components/bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'welcome',
      component: welcomePage
    }, {
      path: '/foo',
      name: 'foo',
      component: foo
    }, {
      path: '/bar',
      name: 'bar',
      component: bar
    }
  ]
})
