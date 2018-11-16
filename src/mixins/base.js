import wepy from 'wepy'

export default class base extends wepy.mixin {
  data = {
    isLoaded: false
  }

  methods = {

  }

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  }

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  }

  /**
   * 页面载入完成
   */
  loaded() {
    this.isLoaded = true
    this.$apply()
  }
}
