/**
 * validator.js
 * @https://github.com/chriso/validator.js
 */

/**
 * 判断是否字符串
 */
function assertString(input) {
  const isString = (typeof input === 'string' || input instanceof String)

  if (!isString) {
    throw new TypeError('This library validates strings only')
  }
}

/**
 * 转为字符串
 */
function toString(input) {
  if (typeof input === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString()
    } else {
      input = '[object Object]'
    }
  } else if (input === null || typeof input === 'undefined' || (isNaN(input) && !input.length)) {
    input = ''
  }
  return String(input)
}

/**
 * 包含
 */
function includes(arr, val) {
  return arr.some(arrVal => val === arrVal)
}

/**
 * 合并
 */
function merge(obj = { }, defaults) {
  for (const key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}

export default {
  assertString,
  toString,
  includes,
  merge
}
