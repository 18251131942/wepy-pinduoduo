import wepy from 'wepy'
import http from './http'

/**
 * 分页
 */
export default class pagination {

  /**
   * 构造
   */
  constructor(url, handler) {
    this.url = url
    this.params = []
    this.list = []

    // 回调数据处理
    this.handler = handler

    // 分页数据
    this.meta = {
      count: 0,
      current_page: 1,
      links: [],
      per_page: 15,
      total: 0,
      total_pages: 1
    }

    // 页面控制
    this.flag = {
      loading: false,
      bottom: false,
      empty: false,
      clear: false
    }
  }

  /**
   * 重置
   */
  reset() {
    this.meta.current_page = 1
    this.flag.empty = true
    this.flag.clear = true
    this.flag.bottom = false
  }

  /**
   * 清理
   */
  clear() {
    this.flag.clear = false
    this.list = []
  }

  /**
   * 载入
   */
  async next(args) {
    if (this.loading) {
      console.warn('pagination loading')
      return this
    }
    this.flag.loading = true

    try {
      const params = {
        ...this.params,
        page: this.meta.current_page,
        ...args
      }
      const data = await http.get(this.url, params)

      // 没有数据
      if (data === null || data.data === null || data.data.length < 1) {
        if (this.flag.clear) {
          this.clear()
        } else {
          this.flag.bottom = true
        }
      }

      // 处理数据
      this.flag.empty = false
      const list = this._processData(data.data)
      if (this.flag.clear) {
        this.list = list
        this.flag.clear = false
      } else {
        this.list = this.list.concat(list)
      }
      if (data.meta && data.meta.pagination) {
        this.meta = data.meta.pagination
      }
      this.meta.current_page++

      // 少于单页数量
      if (data.data.length < this.meta.per_page) {
        this.flag.bottom = true
      }
      return this
    } catch (e) {
      console.log(e)
    } finally {
      this.flag.loading = false
    }
  }

  /**
   * 处理数据
   */
  _processData(data) {
    if (this.handler) {
      data = data.map(item => this.handler(item))
    }
    return data
  }
}
