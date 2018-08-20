import {CONSOLE_MONITOR_ENABLE, CONSOLE_REQUEST_ENABLE, CONSOLE_RESPONSE_ENABLE} from "../index";

export function requestSuccessFunc(requestBody) {
  CONSOLE_REQUEST_ENABLE && console.info('请求SUCCESS:', `URL: ${requestBody.url}`, requestBody)
  // TODO: 打点，鉴权
  return requestBody
}

export function requestFailFunc(error) {
  // TODO: 断网, 请求失败的监控
  return Promise.reject(error)
}

export function responseSuccessFunc(responseBody) {
  CONSOLE_RESPONSE_ENABLE && console.debug('响应SUCCESS:', `URL: ${responseBody.url}`, responseBody)
  return responseBody.data
}

export function responseFailFunc(error) {
  // TODO: 监控
  return Promise.reject(error)
}