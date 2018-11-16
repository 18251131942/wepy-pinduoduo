import base from './base'
import pagination from '../utils/pagination'

/**
 * 地址
 */
export default class address extends base {

  /**
   * 分页
   */
  static paginate() {
    const url = `${this.baseUrl}/address`
    return new pagination(url, this._processItem.bind(this))
  }

  /**
   * 列表
   */
  static async listAddress() {
    const url = `${this.baseUrl}/address`
    return await this.doGet(url).then(data => {
      return this._processItems(data.data)
    })
  }

  /**
   * 增加
   */
  static async addAddress(data) {
    const url = `${this.baseUrl}/address`
    return await this.doPost(url, data).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 修改
   */
  static async updateAddress(id, data) {
    const url = `${this.baseUrl}/address/${id}`
    return await this.doPut(url, data).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 删除
   */
  static async removeAddress(id) {
    const url = `${this.baseUrl}/address`
    return await this.doDelete(url).then(data => {
      return true
    })
  }

  /**
   * 预处理/格式化
   */
  static _processItems(items) {
    return items
  }

  static _processItem(item) {
    return item
  }
}
