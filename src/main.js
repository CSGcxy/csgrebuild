import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import ElementUI from 'element-ui'
import * as echarts from 'echarts'
import global_variable from "@/utils/global_variable";

Vue.config.productionTip = false

// //vue中使用网页防复制
// document.onselectstart = function () {
//   return false;
// };
// document.oncontextmenu = function () {
//   return false;
// };

//进行挂载
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
//挂载网段
Vue.prototype.GLOBAL = global_variable;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  render: h => h(App)
}).$mount('#app')
