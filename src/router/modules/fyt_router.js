/*
 * @Author: 陈少雄_xio
 * @Date: 2019-05-14 18:04:03
 * @Last Modified by: 方愉婷
 * @Last Modified time: 2019-05-14 18:10:08
 */

// 路由配置文件
export default [
    {
        path: '/fyt_index',
        name: 'fyt_index',
        component: resolve => require(['@/pages/fyt_index'], resolve),
        meta: {
            keepAlive: false,// 不需要被缓存
        }
    }
]
