/*
 * @Author: dongpx
 * @Date: 2021-02-06 21:37:15
 * @LastEditTime: 2021-02-06 21:39:10
 * @LastEditors: dongpx
 * @Description: 已登录重定向
 * @FilePath: /realworld-nuxtjs/middleware/notAuthenticated.js
 */

export default function({ store, redirect }) {
  if (store.state.user) {
    return redirect('/')
  }
}
