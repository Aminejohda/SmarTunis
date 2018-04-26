import Api from '@/services/Api'
export default {
  fetchProducts () {
    return Api().get('product')
  },
  addProduct (data) {
    return Api().post('product',data)
  },
  deleteProduct (id) {
    return Api().delete('product/' + id)
  },
  updateProduct (params) {
    return Api().put('product/' + params.id, params)
  },
  getProduct (params) {
    return Api().get('product/' + params.id)
  }
}