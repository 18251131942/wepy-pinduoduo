import base from './base'

/**
 * 设计
 */
export default class design extends base {

  /**
   * Banner
   */
  static async banner (type) {
    const url = `${this.baseUrl}/banner`
    return await this.doGet(url, { type }).then(data => {
      return this._processBannerItems(data.data)
    })
  }

  /**
   * 预处理/格式化
   */
  static _processBannerItems (config) {
    return config
  }
}
