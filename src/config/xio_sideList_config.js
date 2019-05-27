/*
 * @Author: 陈少雄_xio 
 * @Date: 2019-05-10 12:27:44 
 * @Last Modified by: 李伟龙_weilong
 * @Last Modified time: 2019-05-27 13:39:03
 */

// xio_sideList 侧边栏组件的配置文件
    var sideList=[
        {
            name:"测试模板1--xio",
            router: "/",//index_1st
            iconUrl:require("../images/ico-arrow_right.png"),
        },
        {
            name:"测试模板2--fyt",
            router: "/fyt_index",//index_1st
            iconUrl:require("../images/ico-arrow_right.png"),
        },
        {
            name:"下拉框--long",
            router: "/long_index",
            iconUrl:require("../images/ico-arrow_right.png"),
        },
        {
            name:"列表--long",
            router: "/long_index_form",
            iconUrl:require("../images/ico-arrow_right.png"),
        }
        // {
        //     name: "测试模板2",
        //     router: "/xio_index_2nd",
        //     iconUrl: require("../images/ico-arrow_right.png"),
        // },
    ]
export {sideList}