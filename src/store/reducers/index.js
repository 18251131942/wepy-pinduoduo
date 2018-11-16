import { combineReducers } from 'redux'
import cache from './cache'
import counter from './counter'
import direct from './direct'
import stats from './stats'

export default combineReducers({
  cache,
  counter,
  direct,
  stats
})
