import base from './base'
import pagination from '../utils/pagination'

/**
 * 店铺
 */
export default class shop extends base {

  /**
   * 分页
   */
  static paginate() {
    const url = `${this.baseUrl}/shop`
    return new pagination(url, this._processItem.bind(this))
  }

  /**
   * 列表
   */
  static async list() {
    const url = `${this.baseUrl}/shop`
    return await this.doGet(url).then(data => {
      return this._processItems(data.data)
    })
  }

  /**
   * 推荐
   */
  static async featureList() {
    const url = `${this.baseUrl}/shop/feature`
    return await this.doGet(url).then(data => {
      return this._processItems(data.data)
    })
  }

  /**
   * 明细
   */
  static async shopInfo(slug) {
    const url = `${this.baseUrl}/shop/${slug}`
    return await this.doGet(url).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 优惠券
   */
  static async shopCouponList(shopId) {
    const url = `${this.baseUrl}/coupon?shopId=${shopId}`
    return await this.doGet(url).then(data => {
      return this._processItems(data.data)
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
