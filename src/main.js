import Vue from 'vue'
import App from './App.vue'

import './firebase'
import VueFire from 'VueFire'

Vue.use(VueFire) 

new Vue({
  el: '#app',
  render: h => h(App)
})