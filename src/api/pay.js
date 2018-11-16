import base from './base'

/**
 * 支付
 */
export default class pay extends base {

  /**
   * 支付代码
   */
  static async code(data) {
    const url = `${this.baseUrl}/pay/code`
    return await this.doPost(url, data).then(data => {
      return this._processDetail(data.data)
    })
  }

  /**
   * 订单支付
   */
  static async order(data) {
    const url = `${this.baseUrl}/pay/order`
    return await this.doPost(url, data).then(data => {
      return this._processDetail(data.data)
    })
  }

  /**
   * 充值支付
   */
  static async recharge(data) {
    const url = `${this.baseUrl}/pay/recharge`
    return await this.doPost(url, data).then(data => {
      return this._processDetail(data.data)
    })
  }

  /**
   * 预处理/格式化
   */
  static _processDetail(order) {
    return order
  }
}
