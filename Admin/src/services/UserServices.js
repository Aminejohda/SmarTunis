import Api from '@/services/Api'
export default {
	
	index(){
		return Api().get(`admin/users`)
	},
	bann(UserId){
		return Api().get(`admin/users/bannaccept/${UserId}`)
	},
	linkindinit(firstname,lastname,iduser){
		return Api().get(`admin/users/fetchlinkidin/${firstname}/${lastname}/${iduser}`)
	}

}