import Api from '@/services/Api'

export default {
  fetchProjects () {
    return Api().get('project')
  },
  addProject (data) {
    return Api().post('project',data)
  },
  deleteProject (id) {
    return Api().delete('project/' + id)
  },
  updateProject (params) {
    return Api().put('project/' + params.id, params)
  },
  getProject (params) {
    return Api().get('project/' + params.id)
  },
  getMyProjects (params) {
    return Api().get('project/myProjects/' + params.id)
  },
  getCountByTheme () {
    return Api().get('project/count/theme')
  },
  getCountByMonthAndYear () {
    return Api().get('project/count/month')
  },
  getScrapingFacebook (fb) {
    return Api().get('scraping/'+fb )
  },
  getProjectsByTheme (params) {
    return Api().get('project/projectsByTheme/' + params)
  }

  
}
