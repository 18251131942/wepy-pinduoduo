import base from './base'
import pagination from '../utils/pagination'

/**
 * 产品
 */
export default class catalog extends base {

  /**
   * 类别
   */
  static async categories() {
    const url = `${this.baseUrl}/categories`
    return await this.doGet(url).then(data => {
      return this._processCategories(data.data)
    })
  }

  /**
   * 产品分页
   */
  static paginate() {
    const url = `${this.baseUrl}/products`
    return new pagination(url, this._processItem.bind(this))
  }

  /**
   * 产品列表
   */
  static async products() {
    const url = `${this.baseUrl}/products`
    return await this.doGet(url).then(data => {
      return this._processProducts(data.data)
    })
  }

  /**
   * 产品明细
   */
  static async product(slug) {
    const url = `${this.baseUrl}/product/${slug}`
    return await this.doGet(url).then(data => {
      return this._processProductDetail(data.data)
    })
  }

  /**
   * 预处理/格式化
   */
  static _processProducts (products) {
    return products
  }

  /**
   * 预处理/格式化
   */
  static _processProductDetail (products) {
    return products
  }
}
