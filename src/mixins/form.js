import wepy from 'wepy'
import validate from '../utils/validate'
import helper from '../utils/helper'
import tip from '../utils/tip'

export default class form extends wepy.mixin {

  /**
   * 表单数据
   */
  data = {
    form: {}
  }

  /**
   * 方法
   */
  methods = {
    onInput(e) {
      const field = e.currentTarget.id
      if (e.detail.detail) {
        this.form[field] = e.detail.detail.value  
      } else {
        this.form[field] = e.detail.value
      }
    }
  }

  /**
   * 检验是否为空
   */
  checkEmpty(str) {
    return helper.isEmpty(str)
  }

  /**
   * 检验是否为非空
   */
  checkNotEmpty(str) {
    return helper.isNotEmpty(str)
  }

  /**
   * 检验表单规则
   */
  checkRules(rules) {
    for (let rule of rules) {
      const valid = this.checkRule(rule, rule.value)
      if  (!valid) {
        return false
      }
    }
    return true
  }

  /**
   * 检验单个规则
   */
  checkRule(rule, value) {
    const method = validate[rule.method].bind(validate)
    const valid = method(value, rule.method)
    if (!valid) {
      tip.warn(rule.message)
      return false
    }
    return true
  }
}
