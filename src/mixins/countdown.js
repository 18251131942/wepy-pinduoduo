import wepy from 'wepy'

export default class countdown extends wepy.mixin {
  data = {
    timer: null,
    tdata: {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    }
  }

  methods = {

  }

  /**
   * 清理计时器
   */
  onLoad() {
    this.clearTimer()
  }

  /**
   * 倒计时
   */
  countDown (timestamp, status) {
    this.clearTimer()
    this.timer = setInterval(() => {
      const time = new Date(timestamp) - new Date()
      if (time > 0) {
        let day = Math.floor(time / 86400000)
        let hour = Math.floor((time / 3600000) % 24)
        let minute = Math.floor((time / 60000) % 60)
        let second = Math.floor((time / 1000) % 60)

        day = day < 0 ? '0' : day
        hour = hour < 10 ? '0' + hour : hour
        minute = minute < 10 ? '0' + minute : minute
        second = second < 10 ? '0' + second : second

        this.tdata = {
          day,
          hour,
          minute,
          second
        }
      } else {
        this.clearTimer()
      }
      this.$apply()
    }, 1000)
  }

  /**
   * Clear Timer
   */
  clearTimer() {
    if (this.timer != null) {
      clearInterval(this.timer)
    }
  }
}
