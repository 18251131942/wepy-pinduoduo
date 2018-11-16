import { handleActions } from 'redux-actions'
import { FETCH_STATS } from '../types/stats'

export default handleActions({
  [FETCH_STATS] (state, action) {
    return {
      ...state,
      member: action.payload.member,
      order: action.payload.order,
      product: action.payload.product
    }
  }
}, {
  member: {},
  product: {},
  order: {}
})
