import wepy from 'wepy'

export default class pagination extends wepy.mixin {
  config = {}
  components = {}
  methods = {}
  events = {}

  /**
   * 附加数据
   */
  data = {
    paginate: {
      list: [],
      meta: {},
      flag: {}
    },
    paginateList: [],
    isLoading: false,
    isLoaded: false,
    isEmpty: false,
    isReachBottom: false
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  async onPullDownRefresh() {
    await this.reload()
  }

  /**
   * 页面上拉触底事件的处理函数
   */
  async onReachBottom() {
    await this.next()
  }

  /**
   * 重新加载
   */
  async reload() {
    if (this.paginate && this.paginate.reset) {
      this.paginate.reset()
      await this.next()
      wepy.stopPullDownRefresh()
    }
  }

  /**
   * 更新列表
   */
  async update() {
    await this.reload()
  }

  /**
   * 下一页
   */
  async next() {
    try {
      if (this.paginate.flag.bottom) {
        return
      }
      this.isLoading = true
      const params = this.params ? this.params() : {}
      await this.paginate.next(params)
      this.paginateList = this.paginate.list

      this.isReachBottom = this.paginate.flag.bottom
      this.isEmpty = this.paginate.list.length == 0
      if (this.onPageLoad) {
        this.onPageLoad()
      }
    } catch (e) {
      console.warn(e)
    } finally {
      this.isLoading = false
      this.isLoaded = true
      this.$apply()
    }
  }
}
