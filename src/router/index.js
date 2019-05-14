/*
 * @Author: 陈少雄_xio
 * @Date: 2019-05-10 14:56:51
 * @Last Modified by: 李伟龙_weilong
 * @Last Modified time: 2019-05-14 19:48:30
 */

 // 路由文件
import Vue from 'vue'
import Router from 'vue-router'

// 配置文件
import xio_router from './modules/xio_router';// cor 的路由文件
import long_router from './modules/long_router';// cor 的路由文件
import fyt_router from './modules/fyt_router';// fyt 的路由文件

Vue.use(Router);

export default new Router({
  routes: [
    ...xio_router,
    ...fyt_router,
    ...long_router
  ]
})
