export default class Helper {
  /**
   * 是否为空
   */
  static isEmpty(str) {
    return str === '' || str === null || str === 'null'
  }

  /**
   * 是否不为空
   */
  static isNotEmpty(str) {
    return !this.isEmpty(str)
  }

  /**
   * 是否为数字
   */
  static isNumber(str) {
    const pattern = /^[-+]?\d+(\.\d+)?$/
    return pattern.test(str)
  }

  /**
   * 是否为整数
   */
  static isInteger(str) {
    const pattern = /^[1-9]\d*$|^\.\d*$|^0\.\d*$|^[1-9]\d*\.\d*$|^0$/
    return pattern.test(str)
  }

  /**
   * 是否为数组
   */
  static isArray(str) {
    return Object.prototype.toString.call(o) === '[object Array]'
  }
}
