import Vue from 'vue'
import Router from 'vue-router'

import routes from '../router'
import {ROUTER_DEFAULT_CONFIG} from "../config"
import {routerBeforeEachFunc} from '../config/interceptors/router'

Vue.use(Router)

let routerInstance = new Router({
  ...ROUTER_DEFAULT_CONFIG,
  routes,
})

routerInstance.beforeEach(routerBeforeEachFunc)

export default routerInstance