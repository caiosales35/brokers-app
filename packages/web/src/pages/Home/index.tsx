import { Typography } from '@material-ui/core'
import { Broker } from '@repo/database'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import BrokerCard from '../../components/BrokerCard'
import StyledButton from '../../components/StyledButton'
import { axiosInstance } from '../../utils/axios'
import { ButtonContainer, Container } from './styles'

const Home: React.FC = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [brokers, setBrokers] = useState<Broker[]>([])

  const history = useHistory()

  useEffect(() => {
    axiosInstance
      .get<{
        results: Broker[]
        total: number
      }>('http://localhost:3001/api/v1/broker')
      .then(response => {
        setBrokers(response.data.results)
        setTotalPages(Math.ceil(response.data.total / 10))
      })
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
*/
  const pageIncrement = () => {
    setPage(page === totalPages ? page : page + 1)
  }
  const pageDecrement = () => {
    setPage(page > 0 ? page - 1 : page)
  }

  /*
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
      <Typography variant="h2">Corretores</Typography>
      {brokers.map(
        broker => broker.key && <BrokerCard key={broker.key} {...broker} />
      )}
      <ButtonContainer>
        <StyledButton size="medium" onClick={pageDecrement}>
          Página anterior
        </StyledButton>
        <StyledButton size="medium" onClick={pageIncrement}>
          Próxima página
        </StyledButton>
      </ButtonContainer>
      <p>Pagina: {page}</p>
      <p>Total de paginas: {totalPages}</p>
    </Container>
  )
}

export default Home
