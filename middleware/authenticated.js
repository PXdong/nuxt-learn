/*
 * @Author: dongpx
 * @Date: 2021-02-06 21:18:32
 * @LastEditTime: 2021-02-06 21:31:30
 * @LastEditors: dongpx
 * @Description: 验证是否登录的中间件
 * @FilePath: /realworld-nuxtjs/middleware/authenticated.js
 */

export default function({ store, redirect }) {
  if (!store.state.user) {
    return redirect('/login')
  }
}

