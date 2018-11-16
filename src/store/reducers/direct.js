import { handleActions } from 'redux-actions'
import { SELECT_MEMBER, SELECT_PRODUCT } from '../types/direct'

export default handleActions({
  [SELECT_MEMBER] (state, action) {
    return {
      ...state,
      member: action.payload.member
    }
  },

  [SELECT_PRODUCT] (state, action) {
    return {
      ...state,
      products: action.payload.product
    }
  }
}, {
  member: {},
  products: {},
  order: {}
})
