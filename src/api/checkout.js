import base from './base'

/**
 * 结账
 */
export default class checkout extends base {
  /**
   * 提交订单
   */
  static async submitOrder(data) {
    const url = `${this.baseUrl}/order`
    return await this.doPost(url, data).then(data => {
      return this._processOrderDetail(data.data)
    })
  }

  /**
   * 支付参数
   */
  static async payOrder(order) {
    const url = `${this.baseUrl}/pay/order`
    return await this.doPost(url, data).then(data => {
      return data.data.params
    })
  }

  /**
   * 预处理/格式化
   */
  static _processOrderDetail(order) {
    return order
  }
}
