/**
 * Wxs
 */
import wepy from 'wepy'

export default class wxs {
    static tabUrls = [
        '/pages/home/',
        '/pages/catalog/',
        '/pages/cart/',
        '/pages/user/'
    ]

    static isTabUrl(url) {
        return this.tabUrls.some(path => path === url)
    }

    static mapUrl(url) {
        return url
    }

    static backOrRedirect(url) {
        url = this.mapUrl(url)
        if (this.isTabUrl(url)) {
            wx.switchTab({
                url: url
            })
        } else {
            const pages = getCurrentPages()
            const index = pages.findIndex(item => ('/' + item.__route__) === url)
            if (pages.length < 2 || index < 0) {
                wx.redirectTo({
                    url: url
                })
            } else {
                const delta = pages.length - 1 - index
                wx.navigateBack({
                    delta: delta
                })
            }
        }
    }

    static backOrNavigate(url) {
        url = this.mapUrl(url)
        if (this.isTabUrl(url)) {
            wx.switchTab({
                url: url
            })
        } else {
            const pages = getCurrentPages()
            const index = pages.findIndex(item => ('/' + item.__route__) === url)
            if (pages.length < 2 || index < 0) {
                wx.redirectTo({
                    url: url
                })
            } else {
                const delta = pages.length - 1 - index
                wx.navigateBack({
                    delta: delta
                })
            }
        }
    }

    static pay(params) {
        return new Promise((resolve, reject) => {
            wx.requestPayment({
                ...params,
                complete: res => {
                    if (res.errMsg == 'requestPayment:ok') {
                        resolve(res)
                    } else {
                        reject(res)
                    }
                }
            })
        })
    }

    static canIUse(str) {
        if (wx.canIUse) {
            return wx.canIUse(str)
        } else {
            return false
        }
    }

    static checkSDKVersion() {
        if (this.isSDKExpired()) {
            wx.showModal({
                title: '提示',
                content: '您的微信版本太低，为确保正常使用，请尽快升级'
            })
        }
    }

    static isSDKExpired() {
        const { SDKVersion } = wx.getSystemInfoSync()
        return SDKVersion === null || SDKVersion < '1.2.0'
    }
}