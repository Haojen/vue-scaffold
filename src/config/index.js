export const NODE_ENV = process.env.NODE_ENV || 'prod'

export const CONSOLE_MONITOR_ENABLE = false      // 监控记录打印
export const CONSOLE_REQUEST_ENABLE = false      // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE = false     // 开启响应参数打印

// 是否强制所有请求访问本地 MOCK，看到这里同学不难猜到，每个请求也可以单独控制是否请求 MOCK
export const AJAX_LOCALLY_ENABLE = false

export const MONITOR_ENABLE = true

// 路由默认配置，路由表并不从此注入
export const ROUTER_DEFAULT_CONFIG = {
  waitForData: true,
  transitionOnLoad: true
}

// API 默认配置
export const API_DEFAULT_CONFIG = {
  mock: true,
  debug: true,
  baseURL: '',
  mockBaseURL: 'http://rap2api.taobao.org/app/mock/33811',
  sep: '/'
}

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  maxContentLength: 2000,
  headers: {},
  baseURL: API_DEFAULT_CONFIG.mock ? API_DEFAULT_CONFIG.mockBaseURL : API_DEFAULT_CONFIG.baseURL
}

export const VUEX_DEFAULT_CONFIG = {
  strict: process.env.NODE_ENV !== 'production'
}