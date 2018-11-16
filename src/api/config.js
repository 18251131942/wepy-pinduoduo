import base from './base'

/**
 * 配置
 */
export default class config extends base {

  /**
   * 配置
   */
  static async fetch() {
    const url = `${this.baseUrl}/config`
    return await this.doGet(url).then(data => {
      return this._processConfigData(data.data)
    })
  }

  /**
   * 预处理/格式化
   */
  static _processConfigData (config) {
    return config
  }
}
