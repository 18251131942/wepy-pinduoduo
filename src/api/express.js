import base from './base'

/**
 * 快递
 */
export default class express extends base {

  /**
   * 
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
  static _processProducts (products) {
    return products
  }
}
