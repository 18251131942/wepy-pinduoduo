import bus from './bus'

export default class Event {
  static ADDRESS_SELECT = 'ADDRESS_SELECT'
  static MEMBER_SELECT = 'MEMBER_SELECT'
  static CART_REFRESH = 'CART_REFRESH'

  /**
   * 监听事件
   */
  static listen(name, callback, observer) {
    bus.remove(name, observer)
    bus.add(name, callback, observer)
  }

  /**
   * 触发事件
   */
  static emit(name, params) {
    bus.dispatch(name, params)
  }

  /**
   * 移除事件
   */
  static remove(name, observer) {
    bus.remove(name, observer)
  }
}
