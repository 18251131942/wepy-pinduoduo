import wepy from 'wepy'

const storage = {
  async set (key, value) {
    wepy.setStorage({
      key: key,
      data: value
    })
  }
}

export default storage
