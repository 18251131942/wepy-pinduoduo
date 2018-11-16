import base from './base'

/**
 * 页面
 */
export default class page extends base {

  /**
   * 列表
   */
  static async list(data) {
    const url = `${this.baseUrl}/page`
    return await this.doGet(url, data).then(data => {
      return this._processDetail(data.data)
    })
  }

  /**
   * 单页
   */
  static async show(id) {
    const url = `${this.baseUrl}/page/${id}`
    return await this.doGet(url).then(data => {
      return this._processDetail(data.data)
    })
  }

  /**
   * 预处理/格式化
   */
  static _processDetail(item) {
    return item
  }
}
