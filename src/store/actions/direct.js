import { SUBMIT_ORDER } from '../types/direct'
import { createAction } from 'redux-actions'
import api from '@/api/direct'

export const submitOrder = createAction(SUBMIT_ORDER, () => {
  return new Promise(resolve => {
    api.stats((res) => {
      resolve(res)
    })
  })
})
