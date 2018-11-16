import base from './base'
import pagination from '../utils/pagination'

/**
 * 首页
 */
export default class member extends base {

  /**
   * 分页
   */
  static paginate() {
    const url = `${this.baseUrl}/member`
    return new pagination(url, this._processItem.bind(this))
  }

  /**
   * 列表
   */
  static async listMember() {
    const url = `${this.baseUrl}/member`
    return await this.doGet(url).then(data => {
      return this._processItems(data.data)
    })
  }

  /**
   * 增加
   */
  static async addMember(data) {
    const url = `${this.baseUrl}/member`
    return await this.doPost(url, data).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 修改
   */
  static async updateMember(id, data) {
    const url = `${this.baseUrl}/member/${id}`
    return await this.doPost(url, data).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 删除
   */
  static async removeMember(id) {
    const url = `${this.baseUrl}/member`
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
