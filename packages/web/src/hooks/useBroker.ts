import { Broker } from '@repo/database'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axios'
import { PaginatedRequestParams } from '../utils/types'

const PAGE_SIZE = 10

const useBroker = (apiUrl: string, qs: string, page: number) => {
  const [brokers, setBrokers] = useState<Broker[]>([])
  const [totalPages, setTotalPages] = useState(0)

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
      }>(url, { params: { skip: page - 1 } as PaginatedRequestParams })
      .then(response => {
        setBrokers(response.data?.results || response.data)
        setTotalPages(Math.ceil(response.data?.total / PAGE_SIZE))
      })
  }

  return {
    brokers,
    totalPages
  }
}

export default useBroker
