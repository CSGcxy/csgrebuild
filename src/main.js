import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import ElementUI from 'element-ui'
import * as echarts from 'echarts'
import global_variable from "@/utils/global_variable";
import { Notification } from 'element-ui'

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

router.beforeEach((to, from, next) => {
  // to 即将进入的路由
  // from 在哪个路由进入的
  // next 放行
  //   console.log(to); //打印的是页面要跳转到的路由,例如：它下面的path：为"/login"
  let token = localStorage.getItem("uToken") || ""; //在本地存储中获取token

  if (token) {
    //判断是否有token
    next();
  } else {
    //在没有token的前提下，to下面的path是否为/login，如果不是则页面跳转到登录页面
    if (to.path == "/login") {
      next();
    } else {
      // alert("请登录！")
      Notification.warning({message: '请先登录!', duration: 1000, position: 'top-right', showClose: false})
      next({ path: "/login" }); //跳转页面到login页
    }
  }
});

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  render: h => h(App)
}).$mount('#app')
