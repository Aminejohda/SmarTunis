import Vue from 'vue'
import Vuex from 'vuex'
import SmarTunisManager from '@/services/SmarTunisManager'
Vue.use(Vuex)

export default new Vuex.Store({
	testt : (window.localStorage.getItem('vue-stm') === null) ? (window.localStorage.setItem('vue-stm','[]')) : null
	,
	strict : true,
	state : {
		token : (typeof JSON.parse(window.localStorage.getItem('vue-stm'))[0]  !== 'undefined')
		?  JSON.parse(window.localStorage.getItem('vue-stm'))[0].token :  null,
		user : (typeof JSON.parse(window.localStorage.getItem('vue-stm'))[0]  !== 'undefined')
		?  JSON.parse(window.localStorage.getItem('vue-stm'))[0].user :  null,
		isUserLoggedIn : (typeof JSON.parse(window.localStorage.getItem('vue-stm'))[0]  !== 'undefined')
		?  JSON.parse(window.localStorage.getItem('vue-stm'))[0].isUserLoggedIn :  null,
	},
	mutations : {
		setToken(state, token){
			state.token = token
		},
		setUser(state, user){
			state.user = user
		},
		setIsLoggedIn(state, user){
				state.isUserLoggedIn = true
		},
		
		setIsLoggedOut(state, user){
				state.isUserLoggedIn = false
		}
	},
	actions : {
		setToken({commit}, token){
			commit('setToken', token)
		},
		setUser({commit}, user){
			commit('setUser', user)
		},
		setIsLoggedOut({commit}, isUserLoggedIn){
			commit('setIsLoggedOut', isUserLoggedIn)
		},
		setIsLoggedIn({commit}, isUserLoggedIn){
			commit('setIsLoggedIn', isUserLoggedIn)
		}
	}
})
