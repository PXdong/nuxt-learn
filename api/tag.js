/*
 * @Author: dongpx
 * @Date: 2021-02-25 13:01:53
 * @LastEditTime: 2021-02-25 22:48:22
 * @LastEditors: dongpx
 * @Description:
 * @FilePath: /realworld-nuxtjs/api/tag.js
 */

import { request } from '@/plugins/request'

// 获取文章标签列表
export const getTags = (params) => {
  return request({
    method: 'GET',
    url: '/api/tags',
  })
}
