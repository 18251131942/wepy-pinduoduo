export function hostUrl(url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

export function imageUrl(url) {
  if (url === '/static/img/node_normal.png') {
    return '../img/node_normal.png'
  } else {
    return url
  }
}

export function formatAvatar(value) {
  if (value) {
    return value
  }
  return '/storage/avatars/default.png'
}

export function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

export function formatTime2(timestamp) {
  let date = new Date(timestamp * 1000)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())

  return Y + M + D
}

export function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' 分钟前')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时前')
  } else {
    return pluralize(~~(between / 86400), ' 天前')
  }
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label
}

export function formatPrice(value) {
  if (value) {
    return '￥' + parseInt(value * 100) / 100
  }
  return value
}

export function orderStatus(value) {
  value = parseInt(value)
  if (value === 0) {
    return '新订单'
  } else if (value === 1) {
    return '待审核'
  } else if (value === 2) {
    return '待付款'
  } else if (value === 3) {
    return '已确认'
  } else if (value === 4) {
    return '待发货'
  } else if (value === 5) {
    return '已发货'
  } else if (value === 6) {
    return '待收货'
  } else if (value === 7) {
    return '已收货'
  } else if (value === 8) {
    return '已评价'
  } else if (value === 9) {
    return '已完成'
  } else if (value === 11) {
    return '已取消'
  } else if (value === 12) {
    return '无效'
  } else if (value === 13) {
    return '已退货'
  }
  return ''
}
