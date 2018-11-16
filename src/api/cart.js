import base from './base'

/**
 * 购物车
 */
export default class cart extends base {

  /**
   * 信息
   */
  static async info() {
    const url = `${this.baseUrl}/cart/info`
    return await this.doGet(url).then(data => {
      return this._processInfo(data.data)
    })
  }

  /**
   * 产品
   */
  static async items() {
    const url = `${this.baseUrl}/cart/items`
    return await this.doGet(url).then(data => {
      return this._processItems(data.data)
    })
  }

  /**
   * 预处理/格式化
   */
  static __processInfo(info) {
    return info
  }

  static _processItems(items) {
    return items
  }
}
