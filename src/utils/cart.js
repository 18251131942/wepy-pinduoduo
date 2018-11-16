import wepy from 'wepy'
import store from '../store/'

/**
 * 购物车
 */
export default class Cart {
  static instances = new Array()

  /**
   * 创建
   */
  static create(type) {
    if (!this.instances[type]) {
      const instance = new Cart(type)
      this.instances[type] = instance
    }
    return this.instances[type]
  }

  /**
   * 构造函数
   */
  constructor(type) {
    this.type = type
    this.init()
  }

  /**
   * 初始化
   */
  init() {
    const cart = this.getData()
    if (!cart) {
      this.items = []
      this.total = {
        price: 0,
        quantity: 0,
        subtotal: 0,
        shipping: 0,
        discount: 0,
        totalPrice: 0
      }
    } else {
      Object.assign(this, cart)
    }
  }

  /**
   * 添加到购物车
   */
  addCart(product, qty = 1) {
    const index = this.findIndex(product)
    if (index === -1) {
      const item = this.formatProduct(product)
      this.items.push({ ...item, qty })
      this.saveData()
      return
    }
    const item = this.items[index]
    if (item.qty <= 0) {
      this.removeByIndex(index)
    } else {
      item.qty += qty
      item.totalPrice = (item.price * item.qty).toFixed(2)
    }
    this.saveData()
  }

  buyNow(product, qty) {
    const index = this.findIndex(product)
    if (index === -1) {
      this.items = this.items.forEach(item => {
        item.selected = 0
      })
      const item = this.formatProduct(product)
      this.items.push({ ...item, qty })
      this.saveData()
      return
    }
    this.items = this.items.forEach(item => {
      item.selected = 0
    })
    const item = this.items[index]
    item.selected = 1
    item.qty = qty
    item.totalPrice = (item.price * item.qty).toFixed(2)
    this.saveData()
  }

  addQty(product, qty = 1) {
    const index = this.findIndex(product)
    if (index === -1) {
      return
    }
    const item = this.items[index]
    if (item.qty <= 0) {
      this.removeByIndex(index)
    } else {
      item.qty += qty
      item.totalPrice = (item.price * item.qty).toFixed(2)
    }
    this.saveData()
  }

  subQty(product, qty = 1) {
    const index = this.findIndex(product)
    if (index === -1) {
      return
    }
    const item = this.items[index]
    if (item.qty <= 0) {
      this.removeByIndex(index)
    } else {
      item.qty -= qty
      item.totalPrice = (item.price * item.qty).toFixed(2)
    }
    this.saveData()
  }

  setQty(product, qty = 1) {
    const index = this.findIndex(product)
    if (index === -1) {
      return
    }
    const item = this.items[index]
    if (qty <= 0) {
      this.removeByIndex(index)
    } else {
      item.qty = qty
      item.totalPrice = (item.price * item.qty).toFixed(2)
    }
    this.saveData()
  }

  /**
   * 清空购物车/删除
   */
  clear() {
    this.items = []
    this.saveData()
  }

  removeProduct() {
    const key = this.genKey(product)
    this.items = this.items.filter(item => item.key !== key)
    this.saveData()
  }

  removeByIndex(index) {
    if (this.items.length >= index + 1) {
      this.items.splice(index, 1)
      this.saveData()
    }
  }

  /**
   * 数据
   */
  quote() {
    this.calcTotal()
    let items = []
    this.items.forEach(item => {
      items.push({
        id: item.id,
        qty: item.qty,
        price: item.price
      })
    })
    return {
      items,
      total: this.total
    }
  }

  /**
   * 刷新
   */
  refresh() {
    const cart = this.getData()
    if (cart && cart.items) {
      Object.assign(this, cart)
    }
  }

  /**
   * 选中/取消
   */
  selectAll() {
    this.all = true
    this.updateSelected(true)
  }

  unselectAll() {
    this.all = false
    this.updateSelected(false)
  }

  updateSelected(selected) {
    this.items.forEach(item => {
      item.selected = selected
    })
    this.saveData()
  }

  /**
   * 查找
   */
  findItem(product) {
    const key = this.genKey(product)
    return this.items.find(item => item.key === key)
  }

  findIndex(product) {
    const key = this.genKey(product)
    return this.items.findIndex(item => item.key === key)
  }

  /**
   * 计算总价
   */
  calcTotal() {
    const price = this.items.reduce((total, item) => total + (item.price * item.qty), 0).toFixed(2)
    const quantity = this.items.reduce((total, item) => total + item.qty, 0)
    const subtotal = (price * quantity).toFixed(2)
    const shipping = this.total.shipping
    const discount = this.total.discount
    const total = price + shipping - discount
    this.total = { price, quantity, subtotal, shipping, discount, total }
  }

  /**
   * 格式化
   */
  formatProduct(product) {
    return {
      key: this.genKey(product),
      id: product.id,
      name: product.name,
      sku: product.sku,
      spec: product.spec,
      price: product.price,
      image: product.image,
      product: this.formatProductBase(product),
      qty: 1,
      selected: 1,
      deleted: 0
    }
  }

  formatProductBase(product) {
    return {
      id: product.id,
      name: product.name,
      image: product.image,
      intro: product.intro
    }
  }

  /**
   * Key 
   */
  genKey(product) {
    return product.id
  }

  /**
   * 保存Storage
   */
  saveData() {
    this.calcTotal()
    wepy.setStorage({
      key: 'cart-' + this.type,
      data: this
    })
  }

  getData() {
    return wepy.getStorageSync('cart-' + this.type)
  }
}
