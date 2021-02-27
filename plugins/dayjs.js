/*
 * @Author: dongpx
 * @Date: 2021-02-25 22:52:52
 * @LastEditTime: 2021-02-25 22:57:16
 * @LastEditors: dongpx
 * @Description:
 * @FilePath: /realworld-nuxtjs/plugins/dayjs.js
 */
import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(value).format(format)
})
