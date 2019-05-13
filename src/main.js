// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false;

import './styles/style.less';// 基础样式
import './assets/xio_iconfont/iconfont.css';// iconfont
import './styles/vue_transition.less';// 动画less
//import remInit from './config/remConfig';// 启用rem
//remInit();//rem 初始化

/* vue init */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
