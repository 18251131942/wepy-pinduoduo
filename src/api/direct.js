import base from './base'

/**
 * 直接购买
 */
export default class direct extends base {

  /**
   * 提交订单
   */
  static async submitOrder(member, quote, params) {
    const url = `${this.baseUrl}/order`
    const data = {
      member: member,
      items: quote.items,
      total: quote.total,
      params: params
    }
    return await this.doPost(url, data).then(data => {
      return this._processOrderDetail(data.data)
    })
  }

  /**
   * 预处理/格式化
   */
  static _processOrderDetail(order) {
    return order
  }
}
