import Vue from 'vue'
import navigationMenuVue from './NavigationMenu'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#navigationMenu',
  components: { NavigationMenu },
  template: '<NavigationMenu/>'
})
