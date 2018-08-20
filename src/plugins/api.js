import axios from './axios'
import {API_DEFAULT_CONFIG} from "../config"
import API_CONFIG from '../service/api'

function normalize(apiConfig, outerParams) {
  if (apiConfig.method === 'GET') {
    apiConfig.params = outerParams
  }
  else if (apiConfig.method === 'POST') {
    apiConfig.data = outerParams
  }
  return apiConfig
}

function paramValidate(rules, params = {}) {
  if (Object.keys(params).length === 0) return

  Object.keys(rules).map(rule => {
    if (!rules[rule].required) return
    if (!params[rule]) {
      console.error(`The [${rule}] is must required`)
      return
    }

    if (typeof params[rule] !== rules[rule].type) {
      console.error(`校验格式失败`)
    }
  })
}

class MakeAPI {
  constructor(optionObj) {
    this.api = {}
    this.builder(optionObj)
    return this.api
  }

  builder({config, sep, mock, debug}) {
    Object.keys(config).map(namespace => {
      this.builderSingle({
        sep,
        mock,
        debug,
        namespace,
        config: config[namespace],
      })
    })
  }

  builderSingle({namespace, config, sep, mock, debug}) {
    config.map( api => {
      const {name, desc, params, method, path, mockPath} = api
      const apiPath = `${namespace}${sep}${name}`,
            url = mock ? mockPath : path

      debug && console.debug(`调试接口: ${apiPath}, 功能描述:${desc}`)
      // debug && assert(name, `${apiUrl} :接口name属性不能为空`)
      // debug && assert(apiUrl.indexOf('/') === 0, `${apiUrl} :接口路径path，首字符应为/`)
      Object.defineProperty(this.api, apiPath, {
        value(outerParams = {}) {
          // debug && paramValidate(params, outerParams)
          return axios(normalize({method, url}, outerParams))
        }
      })
    })
  }
}

export default new MakeAPI({
  config: API_CONFIG,
  ...API_DEFAULT_CONFIG
})