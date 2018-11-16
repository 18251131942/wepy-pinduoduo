import { FETCH_STATS } from '../types/stats'
import { createAction } from 'redux-actions'
import api from '@/api/stats'

export const fetchStats = createAction(FETCH_STATS, async () => {
	return await api.stats()
})
