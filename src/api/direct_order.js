import base from './base'
import pagination from '../utils/pagination'

/**
 * 首页
 */
export default class direct_order extends base {

  /**
   * 分页
   */
  static paginate() {
    const url = `${this.baseUrl}/order`
    return new pagination(url, this._processItem.bind(this))
  }

  /**
   * 列表
   */
  static async listOrder() {
    const url = `${this.baseUrl}/order`
    return await this.doGet(url).then(data => {
      return this._processItems(data.data)
    })
  }

  /**
   * 增加
   */
  static async addOrder(data) {
    const url = `${this.baseUrl}/order`
    return await this.doPost(url, data).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 修改
   */
  static async updateOrder(id, data) {
    const url = `${this.baseUrl}/order/${id}`
    return await this.doPost(url, data).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 删除
   */
  static async removeOrder(id) {
    const url = `${this.baseUrl}/order`
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
