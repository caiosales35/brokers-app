/* import { Broker } from '@repo/database'
import { useCallback } from 'react'
import { axiosInstance } from '../utils/axios'
import { PaginatedRequestParams } from '../utils/types'

const END_POINT = '/broker'

const useBroker = () => {
  const getPaginated = useCallback(async (params: PaginatedRequestParams) => {
    try {
      const response = await axiosInstance.get<{
        results: Broker[]
        total: number
      }>(END_POINT, {
        params
      })
      console.log(response)
      return Promise.resolve(response.data)
    } catch (err) {
      return Promise.reject(err)
    }
  }, [])

  return {
    getPaginated
  }
}

export default useBroker
*/
