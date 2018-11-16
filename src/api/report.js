import base from './base'

/**
 * 报表
 */
export default class report extends base {

  /**
   * 按日
   */
  static async daily(day) {
    const url = `${this.baseUrl}/report/daily`
    return await this.doGet(url, { day }).then(data => {
      return this._processRecords(data.data)
    })
  }

  /**
   * 按周
   */
  static async weekly(week) {
    const url = `${this.baseUrl}/report/weekly`
    return await this.doGet(url, { week }).then(data => {
      return this._processRecords(data.data)
    })
  }

  /**
   * 按月
   */
  static async monthly(month) {
    const url = `${this.baseUrl}/report/monthly`
    return await this.doGet(url, { month }).then(data => {
      return this._processRecords(data.data)
    })
  }

  /**
   * 预处理/格式化
   */
  static _processRecords(items) {
    return items
  }
}
