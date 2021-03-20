/*
 * @Author: your name
 * @Date: 2021-01-27 23:53:24
 * @LastEditTime: 2021-03-21 00:54:22
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

// 更新个人信息
export const updateUser = (data) => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data,
  })
}

// 获取用户
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/api/user',
  })
}

// 获取个人中心资料
export const getProfile = (username) => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`,
  })
}

// 关注用户
export const followUser = (username) => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
}


// 取消关注
export const unfollowUser= (username) => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  })
}
