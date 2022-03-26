import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
// 1.1 创建store
const store = new Vuex.Store({
	state: {
		userInfo: {},
		token: ''
	},
	mutations: {
		
	},
	actions: {
		
	},
	modules: {
		
	}
})
// 1.2 导出store，main.js注入vue的根实例
export default store