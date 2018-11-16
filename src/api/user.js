import base from './base'

/**
 * 用户
 */
export default class user extends base {

  /**
   * 个人信息
   */
  static async updateProfile(data) {
    const url = `${this.baseUrl}/user/profile`
    return await this.doPut(url, data).then(data => {
      return this._processUserData(data.data)
    })
  }

  /**
   * 预处理/格式化
   */
  static _processUserData(user) {
    return user
  }
}
