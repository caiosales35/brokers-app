import { Broker } from '@repo/database'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axios'
import { PaginatedRequestParams } from '../utils/types'

const PAGE_SIZE = 10

const useBroker = (apiUrl: string, qs: string, page: number) => {
  const [brokers, setBrokers] = useState<Broker[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData()
  }, [apiUrl, qs, page])

  const fetchData = () => {
    const url = `${apiUrl}${qs}`
    axiosInstance
      .get<{
        results: Broker[]
        total: number
      }>(url, {
        params: {
          skip: page - 1,
          limit: PAGE_SIZE
        } as PaginatedRequestParams
      })
      .then(response => {
        const responseBrokers = response.data?.results || response.data
        setBrokers(responseBrokers)
      })
  }

  return {
    brokers
  }
}

export default useBroker
