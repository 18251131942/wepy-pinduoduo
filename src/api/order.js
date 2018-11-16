import base from './base'
import pagination from '../utils/pagination'

/**
 * 订单
 */
export default class order extends base {

  /**
   * 分页订单
   */
  static paginate() {
    const url = `${this.baseUrl}/orders`
    return new pagination(url, this._processOrderList.bind(this))
  }

  /**
   * 订单列表
   */
  static async orders (params) {
    const url = `${this.baseUrl}/orders`
    return await this.doGet(url, params).then(data => {
      return this._processOrderList(data.data)
    })
  }

  /**
   * 订单明细
   */
  static async order(slug) {
    const url = `${this.baseUrl}/order/${slug}`
    return await this.doGet(url).then(data => {
      return this._processOrderDetail(data.data)
    })
  }

  /**
   * 订单取消
   */
  static async orderCancel(slug) {
    const url = `${this.baseUrl}/order/${slug}`
    return await this.doGet(url).then(data => {
      return this._processOrderDetail(data.data)
    })
  }

  /**
   * 订单确认
   */
  static async orderConfirm(slug) {
    const url = `${this.baseUrl}/order/${slug}`
    return await this.doGet(url).then(data => {
      return this._processOrderDetail(data.data)
    })
  }

  /**
   * 订单收货
   */
  static async orderReceive(slug) {
    const url = `${this.baseUrl}/order/${slug}`
    return await this.doGet(url).then(data => {
      return this._processOrderDetail(data.data)
    })
  }

  /**
   * 订单完成
   */
  static async orderComplete(slug) {
    const url = `${this.baseUrl}/order/${slug}`
    return await this.doGet(url).then(data => {
      return this._processOrderDetail(data.data)
    })
  }

  /**
   * 订单退货
   */
  static async orderRefund(slug) {
    const url = `${this.baseUrl}/order/${slug}`
    return await this.doGet(url).then(data => {
      return this._processOrderDetail(data.data)
    })
  }

  /**
   * 预处理/格式化
   */
  static _processOrderList(orders) {
    return orders
  }

  /**
   * 预处理/格式化
   */
  static _processOrderDetail(orders) {
    return orders
  }
}
