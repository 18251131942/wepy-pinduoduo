/**
 * Store
 */
import { getStore } from 'wepy-redux'

const store = getStore()
const meta = {}
const debug = false
let isLoading = false
let loadingQueue = []

/**
 * 取值
 */
const get = key => {
  return (state) => {
    return state.cache[key]
  }
}

/**
 * 保存数据
 */
const save = (key, data) => {
  store.dispatch({
    type: 'SAVE',
    payload: {
      key: key,
      value: data
    }
  })
}

/**
 * 初始化
 */
const init = async () => {
  if (isLoading) {
    return new Promise(resolve => {
      const callback = () => {
        resolve()
      }
      loadingQueue.push(callback)
    })
  } else {
    isLoading = true
    await use(...INIT_KEY)
    isLoading = false
    loadingQueue.forEach(callback => callback())
    loadingQueue = []
  }
}

/**
 * 并发加载数据
 */
const use = async (...fields) => {
  const fs = fields.filter(field => !exists(field))
  if (fs.length > 0) {
    await load(fs)
  }
}

/**
 * 加载数据
 */
const load = async (fields) => {
  const fieldsData = await Promise.all(fields.map(field => fetch(field)))
  fields.forEach((field, index) => {
    const fieldData = fieldsData[index]
    save(field, fieldData)
  })
}

/**
 * 刷新数据
 */
const refresh = async (...fields) => {
  await load(fields)
}

/**
 * 加载数据
 */
const fetch = (field, callback) => {
  updateMeta(field)
  return callback()
}

/**
 * 更新元数据
 */
const updateMeta = (field) => {
  if (meta[field] == null) {
    meta[field] = { inited: true }
  }
  meta[field].updateTime = new Date().getTime()
}

/**
 * 检查是否存在
 */
const exists = key => {
  if (meta[key] == null || meta[key].inited != true) {
    return false
  }
  const updateTime = meta[key].updateTime
  const interval = new Date().getTime() - updateTime
  return interval < TIMEOUT
}

export default {
  get,
  save,
  use,
  refresh,
  init
}