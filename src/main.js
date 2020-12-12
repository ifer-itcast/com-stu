import Vue from 'vue'
import App from './App.vue'
import store from './store'

// 事件总线
export const hub = new Vue();
Vue.prototype.$hub = new Vue();

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
