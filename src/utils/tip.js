/**
 * Tip
 */
export default class Tip {
  static isLoading = false

  /**
   * 确认框
   */
  static confirm(content, title = '提示', payload = {}) {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: content,
        showCancel: true,
        success: res => {
          if (res.confirm) {
            resolve(payload)
          } else if (res.cancel) {
            reject(payload)
          }
        },
        fail: res => {
          reject(payload)
        }
      })
    })
  }

  /**
   * 提示框
   */
  static toast(title, duration = 2000, icon = 'success') {
    return new Promise((resolve, reject) => {
      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: duration,
        success: res => {

        }
      })    
    })
  }

  /**
   * 成功
   */
  static success(title, duration = 2000) {
    wx.showToast({
      title: title,
      icon: 'success',
      mask: true,
      duration: duration
    })
  }

  /**
   * 警告
   */
  static warn(title, duration = 2000) {
    wx.showToast({
      title: title,
      image: '/images/icons/warn.png',
      mask: true,
      duration: duration
    })
  }

  /**
   * 错误
   */
  static error(title, duration = 2000) {
    wx.showToast({
      title: title,
      image: '/images/icons/error.png',
      mask: true,
      duration: duration
    })
  }

  /**
   * 加载提示
   */
  static loading(title = '加载中...') {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    wx.showLoading({
      title: title,
      mask: true
    })
  }

  /**
   * 加载完成
   */
  static loaded() {
    if (this.isLoading) {
      this.isLoading = false
      wx.hideLoading()
    }
  }
}
