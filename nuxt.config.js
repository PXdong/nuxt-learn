/*
 * @Author: dongpx
 * @Date: 2021-01-25 22:37:39
<<<<<<< HEAD
 * @LastEditTime: 2021-03-20 12:52:15
=======
 * @LastEditTime: 2021-02-27 10:58:16
>>>>>>> ea504b820e36bea107da94fdfd40c015e3bd3a4c
 * @LastEditors: dongpx
 * @Description:
 * @FilePath: /realworld-nuxtjs/nuxt.config.js
 */
/**
 * Nuxt.js配置文件
 */

module.exports = {
  linkActiveClass: 'active',
  router: {
    // 自定义路由表规则
    extendRoutes(routes, resolve) {
      // 清楚 Nuxt.js 基于 pages 目录默认生成的路由表规则
      routes.splice(0),
        routes.push(
          ...[
            {
              path: '/',
              component: resolve(__dirname, 'pages/layout/'),
              children: [
                {
                  path: '', // 默认子路由
                  name: 'home',
                  component: resolve(__dirname, 'pages/home/'),
                },
                {
                  path: '/login',
                  name: 'login',
                  component: resolve(__dirname, 'pages/login/'),
                },
                {
                  path: '/register',
                  name: 'register',
                  component: resolve(__dirname, 'pages/login/'),
                },
                {
                  path: '/profile/:username',
                  name: 'profile',
                  component: resolve(__dirname, 'pages/profile/'),
                },
                {
                  path: '/settings',
                  name: 'settings',
                  component: resolve(__dirname, 'pages/settings/'),
                },
                {
                  path: '/editor',
                  name: 'editor',
                  component: resolve(__dirname, 'pages/editor/'),
                },
                {
                  path: '/article/:slug',
                  name: 'article',
                  component: resolve(__dirname, 'pages/article/'),
                },
              ],
            },
          ]
        )
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  // 注册插件
  plugins: ['~/plugins/request.js', '~/plugins/dayjs.js'],
}
