import base from './base'

/**
 * 首页
 */
export default class home extends base {

  /**
   * 账户
   */
  static async account() {
    const url = `${this.baseUrl}/account`
    return await this.doGet(url).then(data => {
      return this._processAccount(data.data)
    })
  }

  /**
   * 统计
   */
  static async stats() {
    const url = `${this.baseUrl}/stats`
    return await this.doGet(url).then(data => {
      return this._processStats(data.data)
    })
  }

  /**
   * 产品
   */
  static async products() {
    const url = `${this.baseUrl}/products`
    return await this.doGet(url).then(data => {
      return this._processProducts(data.data)
    })
  }

  /**
   * 预处理/格式化
   */
  static _processAccount(account) {
    return account
  }

  static _processStats(items) {
    return items
  }

  static _processProducts (products) {
    return products
  }
}
