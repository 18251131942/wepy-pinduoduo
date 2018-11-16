import base from './base'
import pagination from '../utils/pagination'

/**
 * 首页
 */
export default class stock extends base {

  /**
   * 分页
   */
  static paginate(params) {
    const url = `${this.baseUrl}/product`
    return new pagination(url, this._processItem.bind(this))
  }

  /**
   * 列表
   */
  static async listProduct() {
    const url = `${this.baseUrl}/product`
    return await this.doGet(url).then(data => {
      return this._processItems(data.data)
    })
  }

  /**
   * 单个
   */
  static async getProduct(id) {
    const url = `${this.baseUrl}/product/${id}`
    return await this.doGet(url).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 增加
   */
  static async addProduct(data) {
    const url = `${this.baseUrl}/product`
    return await this.doPost(url, data).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 修改
   */
  static async updateProduct(id, data) {
    const url = `${this.baseUrl}/product/${id}`
    return await this.doPut(url, data).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 删除
   */
  static async removeProduct(id) {
    const url = `${this.baseUrl}/product`
    return await this.doDelete(url).then(data => {
      return true
    })
  }

  /**
   * 扫码查找
   */
  static async getProductByCode(code) {
    const url = `${this.baseUrl}/product/scan/${code}`
    return await this.doGet(url).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 修改库存数量
   */
  static async updateStockQuantity(id, qty) {
    const url = `${this.baseUrl}/product/${id}`
    const data = {
      stock_quantity: qty
    }
    return await this.doPut(url, data).then(data => {
      return this._processItem(data.data)
    })
  }

  /**
   * 入库更新
   */
  static async saveStock(data) {
    const url = `${this.baseUrl}/product/stock`
    return await this.doPost(url, data).then(data => {
      return data
    })
  }

  /**
   * 预处理/格式化
   */
  static _processItems(items) {
    return items
  }

  static _processItem(item) {
    return item
  }

  static _processInfo(info) {
    return info
  }
}
