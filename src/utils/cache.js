/**
 * Cache
 */
export default class Cache {
  static cache = new Map()
  static debug = false

  /**
   * Map
   */
  static get(key) {
    return this.cache.get(key)
  }

  static set(key, value) {
    if (key == null) {
      return
    }
    value.timestamp = new Date().getTime()
    this.cache.set(key, value)
  }

  static remove(key) {
    if (key == null) {
      return
    }
    this.cache.delete(key)
  }

  static isExpired(key, minute = 5) {
    const value = this.cache.get(key)
    if (value == null) {
      this.log(`[cache]${key} not exists`)
      return true
    }
    const interval = new Date().getTime() - value.timestamp
    const valid = interval > minute * 60 * 1000
    if (valid) {
      this.log(`[cache]${key} expired`)
      this.cache.delete(key)
    } else {
      this.log(`[cache]${key} exists`)
    }
    return valid
  }

  /**
   * 辅助
   */
  static log(text) {
    if (this.debug) {
      console.log(text)
    }
  }

  /**
   * 功能
   */
  static async fetch(key, cb) {
    if (this.isExpired(key)) {
      const value = await cb()
      this.set(key, value)
    }
    return this.cache.get(key)
  }
}
