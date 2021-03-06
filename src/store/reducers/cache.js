import { handleActions } from 'redux-actions'
import { SAVE } from '../types/counter'

export default handleActions({
  [SAVE] (state, action) {
    const { key, value } = action.payload
    return {
      ...state,
      [key]: value
    }
  }
}, {
  config: null
})
