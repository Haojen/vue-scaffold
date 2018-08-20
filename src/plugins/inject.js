import api from './api'
import consts from './const'

export default {
  install(Vue, options) {
    Vue.prototype.$fetch = api
    Vue.prototype.$const = consts
  }
}