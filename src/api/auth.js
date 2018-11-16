import wepy from 'wepy'
import base from './base'

/**
 * 授权
 */
export default class auth extends base {

  /**
   * 登录
   */
  static async login() {
    const token = this.getConfig('token')
    if (token != null && token != '') {
      try {
        await this.checkLogin(token)
      } catch (e) {
        await this.loginByWx()
      }
    } else {
      await this.loginByWx()
    }
  }

  /**
   * 账号登录
   */
  static async loginByAuth(data) {
    const url = `${this.baseUrl}/auth/login`
    return await this.doPost(url, data).then(data => {
      return data.token
    })
  }

  /**
   * 微信登录
   */
  static async loginByWx() {
    const { code } = await wepy.login()
    const { token } = await this.session(code)
    console.log(code)
    console.log(token)
  }

  /**
   * 检查登录状态
   */
  static checkLogin() {

  }

  /**
   * 获取用户信息
   */
  static async info(code) {
    try {
      if (this.hasConfig('user')) {
        store.save('user', this.getConfig('user'))
        return true
      }
      await this.loginByWx()
    } catch (e) {
      console.log(e)
      await this.loginByWx()
    }
  }

  /**
   * 注册
   */
  static async register() {
    const url = `${this.baseUrl}/auth/register`
    return await this.doGet(url).then(data => {
      return data.data
    })
  }

  /**
   * 忘记密码
   */
  static async forgot() {
    const url = `${this.baseUrl}/auth/forgotPassword`
    return await this.doGet(url).then(data => {
      return data.data
    })
  }

  /**
   * 重设密码
   */
  static async reset() {
    const url = `${this.baseUrl}/auth/resetPassword`
    return await this.doGet(url).then(data => {
      return data.data
    })
  }

  /**
   * 发送验证码
   */
  static async session(code) {
    const url = `${this.baseUrl}/wxauth/session`
    return await this.doGet(url, { code }).then(data => {
      return data.data
    })
  }

  /**
   * 检查数据
   */
  static async checkUserInfo(rawUser) {
    const url = `${this.baseUrl}/wxauth/checkUserInfo`
    const data = {
      rawData: rawUser.rawData,
      signature: rawUser.signature
    }
    return await this.doPost(url, data).then(data => {
      return data.data
    })
  }

  /**
   * 解密用户数据
   */
  static async decodeUserInfo(rawUser) {
    const url = `${this.baseUrl}/wxauth/decodeUserInfo`
    const data = {
      encryptedData: rawUser.encryptedData,
      iv: rawUser.iv
    }
    return await this.doPost(url, data).then(data => {
      return data.data
    })
  }

  /**
   * Config
   */
  static getConfig(key) {
    return wepy.$instance.globalData.authInfo[key]
  }

  static setConfig(key, value) {
    wepy.$instance.globalData.authInfo[key] = value
    this.saveConfig()
  }

  static removeConfig(key) {
    wepy.$instance.globalData.authInfo[key] = null
    this.saveConfig()
  }

  static saveConfig() {
    wepy.setStorageSync('AUTH_INFO', wepy.$instance.globalData.authInfo)
  }
}
