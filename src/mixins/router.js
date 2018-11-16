import wepy from 'wepy'
import Event from '@/utils/event'
import Tip from '@/utils/tip'

export default class router extends wepy.mixin {
  config = {}
  data = {}
  components = {}
  events = {}

  methods = {
    toHome() {
      this.$root.$switch('/pages/home/index')
    },

    toMarket() {
      this.$root.$switch('/pages/market/index')
    },

    toAccount() {
      this.$root.$switch('/pages/account/index')
    },

    toUser() {
      this.$root.$switch('/pages/user/index')
    }
  }

  onShow() {

  }

  onLoad() {

  }
}
