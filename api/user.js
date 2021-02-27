/*
 * @Author: your name
 * @Date: 2021-01-27 23:53:24
 * @LastEditTime: 2021-02-25 22:48:14
 * @LastEditors: dongpx
 * @Description: In User Settings Edit
 * @FilePath: /realworld-nuxtjs/api/user.js
 */
import { request } from '@/plugins/request'

//用户登录
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data,
  })
}

// 用户注册
export const register = (data) => {
  return request({
    method: 'POST',
    url: '/api/users',
    data,
  })
}
