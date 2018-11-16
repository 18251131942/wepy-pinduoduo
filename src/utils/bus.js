/**
 * 事件总线/通知中心
 */
export default class Bus {
  static _list = []
  static _debug = false

  /**
   * 注册通知对象
   */
  static add(name, selector, observer) {
    if (name && selector) {
      this._list.push({
        name,
        selector,
        observer
      })
    }
  }

  /**
   * 仅一次监听
   */
  static once(name, selector, observer) {
    const exist = this._list.filter(item => {
      if (item.name == name && item.observer === observer) {
        return true
      }
      return false
    })
    if (exist) {
      return
    }
    this.add(name, selector, observer)
  }

  /**
   * 移除通知
   */
  static remove(name, observer) {
    this._list = this._list.filter(item => {
      if (item.name === name && item.observer === observer) {
        return false
      }
      return true
    })
  }

  /**
   * 发送通知
   */
  static dispatch(name, params) {
    if (this._list.length === 0) {
      return
    }
    this._list.forEach(item => {
      if (item.name === name) {
        item.selector(params)
      }
    })
  }
}
