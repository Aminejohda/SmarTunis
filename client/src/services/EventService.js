import Api from '@/services/Api'

export default {
  getevents () {
    return Api().get('event')
  },
  addEvent (data) {
    return Api().post('event',data)
  },
  addMedia (data) {
    return Api().post('eventMedia',data)
  },
  deleteEvent (id) {
    return Api().delete('event/' + id)
  },
  updateEvent (params) {
    return Api().put('edit/' + params.id, params)
  },
  getEvent (params) {
    return Api().get('event/get/' + params)
  },
  myEvents (params) {
    return Api().get('event/myEvents/' + params)
  }
}
