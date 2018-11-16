import wepy from 'wepy'

export default class Http {
  static async request (url, data, method, loading = true) {
    const params = {
      url: url,
      method: method,
      data: data
    }
    if (loading) {

    }
    const res = await wepy.request(params)
    if (this.isSuccess(res)) {
      return res.data
    } else {
      throw this.exception(res)
    }
  }

  static isSuccess (res) {
    const statusCode = res.statusCode
    if (statusCode !== 200) {
      return false
    }
    const data = res.data
    return data && !data.error
  }

  static exception (res) {
    const error = {}
    error.statusCode = res.statusCode
    const data = res.data
    if (data.data) {
      error.code = data.data.code
      error.message = data.data.message
      error.data = data
    }
    return error
  }

  static get (url, data, loading = true) {
    return this.request(url, data, 'GET', loading)
  }

  static post (url, data, loading = true) {
    return this.request(url, data, 'POST', loading)
  }

  static put (url, data, loading = true) {
    return this.request(url, data, 'PUT', loading)
  }

  static delete (url, data, loading = true) {
    return this.request(url, data, 'DELETE', loading)    
  }
}
