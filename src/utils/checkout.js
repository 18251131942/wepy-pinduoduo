import wepy from 'wepy'
import store from '../store/'

/**
 * 结账
 */
export default class Checkout {
  /**
   * 构造函数
   */
  constructor() {
    this.init()
  }

  /**
   * 初始化
   */
  init() {
    this.cart = null
    this.customer = null
    this.params = {}
    this.items = []
    this.total = {}
  }

  /**
   * 购物车
   */
  setCart(cart) {
    this.items = cart.items
    this.total = this.calcTotal(cart.total)
  }

  /**
   * 设置客户
   */
  setCustomer(customer) {
    this.customer = customer
  }

  /**
   * 地址
   */
  setAddress(address) {
    this.address = address
  }

  /**
   * 付款方式
   */
  setPayment(payment) {
    this.payment = payment
  }

  /**
   * 运输方式
   */
  setShipment(shipment) {
    this.shipment = shipment
  }

  /**
   * 设置参数
   */
  setParams(params) {
    this.params = params
  }

  setParam(key, value) {
    this.params[key] = value
  }

  /**
   * 计算总价
   */
  getTotal() {
    return {
      subtotal: 0,
      shipping: 0,
      discount: 0,
      total: 0
    }
  }

  /**
   * 提交数据
   */
  quoteData() {
    return {
      products: this.items.forEach(item => {
        return {
          id: item.product_id,
          qty: item.qty
        }
      }),
      address_id: this.address.id
    }
  }
}
