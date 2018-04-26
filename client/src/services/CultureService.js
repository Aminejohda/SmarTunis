import Api from '@/services/Api'
export default {
	create(params){
		return Api().post('culture/create',params)
	},
	edit(params){
		return Api().post('culture/update',params)
	},
	index(){
		return Api().get('culture')
	},
	myCulturalSpaces(spaceId){
		return Api().get(`culture/myspaces/${spaceId}`)
	},
	showSpace(spaceId,userId){
		return Api().get(`culture/show/${spaceId}/${userId}`)
	},
	deleteSpace(spaceId){
		return Api().delete(`culture/delete/${spaceId}`)
	},
	mostviewd(){
		return Api().get(`culture/mostviewd`)
	},
	countcategories(){
		return Api().get(`culture/countcategories`)
	},
	showByCategorie(categorie){
		return Api().get(`culture/${categorie}`)
	}

}