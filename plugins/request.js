/*
 * @Author: dongpx
 * @Date: 2021-02-25 22:38:35
 * @LastEditTime: 2021-02-25 22:48:55
 * @LastEditors: dongpx
 * @Description:
 * @FilePath: /realworld-nuxtjs/plugins/request.js
 */
import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
})

// 通过插件机制获取到上下文对象（query、params、req、res、app、store...）
// 插件导出函数必须作为 default 成员
export default ({ store }) => {
  request.interceptors.request.use(
    function(config) {
      const { user } = store.state
      if (user && user.token) {
        config.headers.Authorization = `Token ${user.token}`
      }

      return config
    },
    function(error) {
      return Promise.reject(error)
    }
  )
}
