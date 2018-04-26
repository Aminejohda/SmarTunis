import Api from '@/services/Api'
export default {
	register(credentials){
		return Api().post('Auth/register',credentials)
	},
	login(credentials){
		return Api().post('Auth/login',credentials)
	},
	regFacebook(){
		return Api().get('auth/facebook')
	},
	redirect(token){
		return Api().get(`Auth/getUserById/${token}`)
	}
}