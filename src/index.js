import Vue from 'vue'
import App from './App'

import 'normalize.css'
import '../static/css/base.scss'
import '../static/css/helper.scss'
import '../static/css/layout.scss'

import './directives/index'
import router from './plugins/router'
import inject from './plugins/inject'
// import store from 'plugins/store'
// 如果不需要配置的，直接可以在这里引入
Vue.use(inject)

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
})