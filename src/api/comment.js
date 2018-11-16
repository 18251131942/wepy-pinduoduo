import base from './base'
import pagination from '../utils/pagination'

/**
 * 评论
 */
export default class comment extends base {

  /**
   * 分页
   */
  static paginate() {
    const url = `${this.baseUrl}/comment`
    return new pagination(url, this._processItem.bind(this))
  }

  /**
   * 列表
   */
  static async listComment() {
    const url = `${this.baseUrl}/comment`
    return await this.doGet(url).then(data => {
      return this._processItems(data.data)
    })
  }

  /**
   * 增加
   */
  static async addComment(data) {
    const url = `${this.baseUrl}/comment`
    return await this.doPost(url, data).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 修改
   */
  static async updateComment(id, data) {
    const url = `${this.baseUrl}/comment/${id}`
    return await this.doPut(url, data).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 删除
   */
  static async removeComment(id) {
    const url = `${this.baseUrl}/comment`
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
