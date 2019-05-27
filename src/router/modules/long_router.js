/*
 * @Author: 陈少雄_xio
 * @Date: 2019-05-14 18:04:03
 * @Last Modified by: 李伟龙_weilong
 * @Last Modified time: 2019-05-27 13:41:29
 */

// 路由配置文件
export default [
    {
        path: '/long_index',
        name: 'long_index',
        component: resolve => require(['@/pages/long_index'], resolve),
        meta: {
            keepAlive: false,// 不需要被缓存
        }
    },
    {
        path: '/long_index_form',
        name: 'long_index_form',
        component: resolve => require(['@/pages/long_index_form'], resolve),
        meta: {
            keepAlive: false,// 不需要被缓存
        }
    }
]
