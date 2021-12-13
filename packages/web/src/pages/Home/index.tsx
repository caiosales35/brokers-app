import { Broker } from '@repo/database'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosInstance } from '../../utils/axios'
import { Container } from './styles'

const Home: React.FC = () => {
  const [page, setPage] = useState(0)
  const [brokers, setBrokers] = useState<Broker[]>([])

  const history = useHistory()

  useEffect(() => {
    axiosInstance
      .get<{
        results: Broker[]
        total: number
      }>('http://localhost:3001/api/v1/broker')
      .then(response => setBrokers(response.data.results))
  }, [])

  /* const { getPaginated } = useBroker()

  const fetchData = () => {
    const params = qs.parse(history.location.search)
    getPaginated({ ...params, page })
      .then(response => {
        const loadedBrokers = response.results
        const brokersToInsert = loadedBrokers

        if (page === 0) {
          setBrokers(brokersToInsert)
        } else {
          setBrokers([...brokers, ...brokersToInsert])
        }
      })
      .catch(e => {
        // toast.error(e)
        console.log(e)
      })
  }

  useEffect(() => {
    fetchData()
  }, [page])

  const pageIncrement = () => {
    setPage(page + 1)
  }

  const onChangeParams = () => {
    if (page === 0) {
      fetchData()
    } else {
      setPage(0)
    }
  }
*/

  return (
    <Container>
      {brokers.map(broker => (
        <p key={broker.key}>{broker?.name}</p>
      ))}
    </Container>
  )
}

export default Home
