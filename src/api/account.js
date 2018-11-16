import base from './base'

/**
 * 账户
 */
export default class account extends base {

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
   * 账单记录
   */
  static async records() {
    const url = `${this.baseUrl}/account/record`
    return await this.doGet(url).then(data => {
      return this._processRecords(data.data)
    })
  }

  /**
   * 充值记录
   */
  static async recharges() {
    const url = `${this.baseUrl}/recharge`
    return await this.doGet(url).then(data => {
      return this._processRecords(data.data)
    })
  }

  /**
   * 提现记录
   */
  static async withdraws() {
    const url = `${this.baseUrl}/withdraw`
    return await this.doGet(url).then(data => {
      return this._processRecords(data.data)
    })
  }

  /**
   * 充值
   */
  static async recharge() {
    const url = `${this.baseUrl}/recharge`
    return await this.doPost(url).then(data => {
      return this._processRecord(data.data)
    })
  }

  /**
   * 提现
   */
  static async withdraw() {
    const url = `${this.baseUrl}/withdraw`
    return await this.doPost(url).then(data => {
      return this._processRecord(data.data)
    })
  }

  /**
   * 预处理/格式化
   */
  static _processAccount(account) {
    return account
  }

  static _processRecords(items) {
    return items
  }

  static _processRecord(item) {
    return item
  }
}
