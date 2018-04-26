import Api from '@/services/Api'
export default {
	
	index(){
		return Api().get(`admin/culture`)
	},
	edit(spaceId){
		return Api().get(`admin/culture/accept/${spaceId}`)
	},
	countcategories(){
		return Api().get(`admin/culture/countcategories`)
	}
	

}