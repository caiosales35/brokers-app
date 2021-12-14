/* eslint-disable camelcase */
import { Typography } from '@material-ui/core'
import { Broker } from '@repo/database'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import BrokerCard from '../../components/BrokerCard'
import StyledButton from '../../components/StyledButton'
import { axiosInstance } from '../../utils/axios'
import { ButtonContainer, Container } from './styles'

const Home: React.FC = () => {
  const baseURL = 'http://localhost:3001/api/v1/broker'
  const pageSize = 10
  const history = useHistory()

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [brokers, setBrokers] = useState<Broker[]>([])
  const [isOrderByAlphabetic, setIsOrderByAlphabetic] = useState(true)
  const [isOrderByLeads, setIsOrderByLeads] = useState(false)
  const [isOrderByComissionValue, setIsOrderByComissionValue] = useState(false)
  const [apiUrl, setApiUrl] = useState(baseURL)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData()
  }, [apiUrl])

  const fetchData = () => {
    axiosInstance
      .get<{
        results: Broker[]
        total: number
      }>(apiUrl)
      .then(response => {
        setBrokers(response.data?.results || response.data)
        setTotalPages(Math.ceil(response.data.total / pageSize))
      })
  }

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

  const handleOrderLabel = (): string => {
    if (isOrderByAlphabetic) return 'alfabética'
    if (isOrderByLeads) return 'quantidade de leads'
    if (isOrderByComissionValue) return 'valor de comissão'
    return ''
  }

  const handleIsOrderByAlphabetic = () => {
    setIsOrderByAlphabetic(true)
    setIsOrderByLeads(false)
    setIsOrderByComissionValue(false)
    setApiUrl(baseURL)
  }
  const handleIsOrderByLeads = () => {
    setIsOrderByAlphabetic(false)
    setIsOrderByLeads(true)
    setIsOrderByComissionValue(false)
    setApiUrl(`${baseURL}/lead`)
  }
  const handleIsOrderByComissionValue = () => {
    setIsOrderByAlphabetic(false)
    setIsOrderByLeads(false)
    setIsOrderByComissionValue(true)
    setApiUrl(`${baseURL}/comission`)
  }

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
      <Typography variant="body2">
        Ordenação ativa: {handleOrderLabel()}
      </Typography>
      <ButtonContainer>
        <StyledButton size="small" onClick={handleIsOrderByAlphabetic}>
          Alfabética
        </StyledButton>
        <StyledButton size="small" onClick={handleIsOrderByLeads}>
          Leads
        </StyledButton>
        <StyledButton size="small" onClick={handleIsOrderByComissionValue}>
          Comissões
        </StyledButton>
      </ButtonContainer>
      {brokers?.map(
        broker =>
          broker.key && (
            <BrokerCard
              {...{
                ...broker,
                key: broker.key + (broker?.comission_key || '')
              }}
            />
          )
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
