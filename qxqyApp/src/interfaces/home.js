/*
 * @Description: 首页接口
 * @Version: 1.0
 * @Autor: yongqing
 * @Date: 2019-12-18 15:09:40
 * @LastEditors  : yongqing
 * @LastEditTime : 2019-12-18 15:10:17
 */
import request from '@/utils/request';

export function getHomeList(params) {
  return request({
    url: 'v1/api/home',
    method: 'get',
    params,
  });
}
