/*
 * @Author: dongpx
 * @Date: 2021-01-31 23:25:42
 * @LastEditTime: 2021-02-06 21:46:25
 * @LastEditors: dongpx
 * @Description:
 * @FilePath: /realworld-nuxtjs/store/index.js
 */
const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    // 当前登录用户的登录状态
    user: null,
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null

    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)

      try {
        user = JSON.parse(parsed.user)
      } catch (err) {}
    }

    commit('setUser', user)
  },
}
