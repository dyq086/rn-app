/*
 * @Author: yongqing
 * @Date:   2019-07-23 14:54:27
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-08-05 11:51:03
 */

import axios from 'axios';

const service = axios.create({
  withCredentials: false,
  baseURL: 'http://rap2api.taobao.org/app/mock/240234/',
  timeout: 50000, // 请求超时时间// send cookies when cross-domain requests
});

// 添加请求拦截器
service.interceptors.request.use(
  function(config) {
    console.log('======request======', config);
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    console.error('======request-error======', error);
    return Promise.reject(error);
  },
);

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    console.log('======response======', response);
    return response.data;
  },
  function(error) {
    // 对响应错误做点什么
    console.error('======response-error======', error);
    return Promise.reject(error);
  },
);

export default service;
