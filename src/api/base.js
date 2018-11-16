import wepy from 'wepy'
import http from '../utils/http'

export default class base {
  /**
   * CONFIG
   */
  static baseUrl = wepy.$instance.globalData.baseUrl

  /**
   * REST
   */
  static doGet = http.get.bind(http)
  static doPost = http.post.bind(http)
  static doPut = http.put.bind(http)
  static doDelete = http.delete.bind(http)

  /**
   * AUTH
   */
  static auth() {

  }
}
