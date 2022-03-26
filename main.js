
import Vue from 'vue'
import App from './App'
import store from './store/index.js'
Vue.config.productionTip = false
// #ifndef VUE3
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif