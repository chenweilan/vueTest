import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NavigationMenu from '@/components/NavigationMenu'
import EditTxt from '@/components/EditTxt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/navigationMenu',
          name: 'NavigationMenu',
          component: NavigationMenu

        }
      ]
    },
    {
      path: '/editTxt',
      name: 'EditTxt',
      component: EditTxt
    }
  ]
})
