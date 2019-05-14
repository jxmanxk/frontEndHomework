/*
 * @Author: 陈少雄_xio 
 * @Date: 2019-05-10 14:54:08 
 * @Last Modified by: 李伟龙_weilong
 * @Last Modified time: 2019-05-14 19:48:40
 */

 // 路由配置文件
export default [
    {
        path: '/',
        name: 'index_1st',
        component: resolve => require(['@/pages/xio_index_1st'], resolve),
        meta: {
            keepAlive: false,// 不需要被缓存
            // noMenu:true,//是否不显示 侧栏
            // noViewHead:true,//是否不显示 viewHead
        }
    },
]