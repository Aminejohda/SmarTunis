import Api from '@/services/Api'

export default {
  ScrapeUser (id) {
    return Api().get('apis/userTwitter/'+id)
  },
  CategorizeUser (id) {
    return Api().get('scrape/twitterInterests/'+id)
  },
  getUser (id) {
    return Api().get('users/'+id)
  },
  editProfile (params) {
    return Api().put('users/'+params.id,params)
  }

}
