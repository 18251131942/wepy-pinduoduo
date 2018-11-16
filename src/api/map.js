import QQMapWX from '../libs/qqmap'

/**
 * Map Key
 */
const API_KEY = 'aaa'

export default class map {
  /**
   * Map Region
   */
  static REGION = ''

  /**
   * QQ地图解析
   */
  static map = new QQMapWX({ key: API_KEY })

  /**
   * 地址检索
   */
  static search(keyword) {
    return new Promise((resolve, reject) => {
      this.map.search({
        boundary: `region(${this.REGION}, 0)`,
        keyword: keyword,
        success: ({ data }) => {
          const result = []
          data.forEach(poi => {
            const address = this.processPOI(poi)
            result.push(address)
          })
          resolve(result)
        },
        fail: res => {
          reject(res)
        }
      })
    })
  }

  /**
   * 地址逆解析
   */
  static reverse(latitude, longitude) {
    return new Promise((resolve, reject) => {
      this.map.reverseGeocoder({
        location: {
          latitude: latitude,
          longitude: longitude
        },
        get_poi: 1,
        poi_options: 'policy=2',
        success: ({ result }) => {
          const current = {}
          current.display = result.formatted_addresses.recommend
          current.province = result.ad_info.province
          current.city = result.ad_info.city
          current.district = result.ad_info.district
          current.town = result.address_reference.town.title
          current.address = result.address
          current.detail = result.address + current.display
          current.latitude = result.location.lat
          current.longitude = result.location.lng

          const nearby = []
          const pois = result.pois
          pois.forEach(poi => {
            const address = this.processPOI(poi)
            address.town = current.town
            nearby.push(address)
          })

          resolve({ address, nearby })
        },
        fail: (res) => {
          reject(res)
        }
      })
    })
  }

  /**
   * 处理POI数据
   */
  static processPOI(poi) {
    const address = {}
    address.display = poi.title
    address.province = poi.ad_info.province
    address.city = poi.ad_info.city
    address.district = poi.ad_info.district
    address.address = poi.address
    address.detail = poi.address + poi.title
    address.latitude = poi.location.lat
    address.longitude = poi.location.lng
    return address
  }
}
