import base from './base'

/**
 * 统计
 */
export default class stats extends base {

  /**
   * 统计
   */
  static async stats() {
    const url = `${this.baseUrl}/stats`
    return await this.doGet(url).then(data => {
      return this._processStats(data)
    })
  }

  /**
   * 预处理/格式化
   */
  static _processStats(data) {
    return data
  }
}
