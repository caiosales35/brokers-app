/* eslint-disable camelcase */
import { Grid, Paper, Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import BrokerCard from '../../components/BrokerCard'
import StyledButton from '../../components/StyledButton'
import useBroker from '../../hooks/useBroker'
import { handleQs } from '../../utils'
import { ButtonContainer, Container } from './styles'

const Home: React.FC = () => {
  const baseURL = 'http://localhost:3001/api/v1/broker'

  const [page, setPage] = useState(1)
  const [isOrderByAlphabetic, setIsOrderByAlphabetic] = useState(true)
  const [isOrderByLeads, setIsOrderByLeads] = useState(false)
  const [isOrderByComissionValue, setIsOrderByComissionValue] = useState(false)
  const [apiUrl, setApiUrl] = useState(baseURL)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [qs, setQs] = useState('')

  const { totalPages, brokers } = useBroker(apiUrl, qs, page)

  const handleSearch = () => {
    if (name || phone) {
      setQs(handleQs(name || '', phone || ''))
      setName('')
      setPhone('')
    }
  }

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
    setPage(page >= totalPages ? page : page + 1)
  }
  const pageDecrement = () => {
    setPage(page > 1 ? page - 1 : page)
  }

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
      {qs && (
        <Typography variant="body2">
          Parametro da busca:{' '}
          {qs
            .replace('?', '')
            .replace('=', '')
            .replace('&', '')
            .replace('name', '')
            .replace('phone', '')
            .replace('=', ' ')}
        </Typography>
      )}
      <ButtonContainer>
        <TextField
          variant="filled"
          size="small"
          placeholder="Nome"
          label="Nome"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <TextField
          variant="filled"
          size="small"
          placeholder="Telefone"
          label="Telefone"
          onChange={e => setPhone(e.target.value)}
          value={phone}
        />
        <StyledButton onClick={handleSearch}>Buscar</StyledButton>
        <StyledButton onClick={() => setQs('')}>Limpar busca</StyledButton>
      </ButtonContainer>
      <Grid container>
        {brokers?.map(
          broker =>
            broker.key && (
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <Paper elevation={3}>
                  <BrokerCard
                    {...{
                      ...broker,
                      key: broker.key + (broker?.comission_key || '')
                    }}
                  />
                </Paper>
              </Grid>
            )
        )}
      </Grid>

      <ButtonContainer>
        <StyledButton size="medium" onClick={pageDecrement}>
          Página anterior
        </StyledButton>
        <StyledButton size="medium" onClick={pageIncrement}>
          Próxima página
        </StyledButton>
      </ButtonContainer>
      <p>Pagina: {totalPages === 0 ? totalPages : page}</p>
      <p>Total de paginas: {totalPages || 1}</p>
    </Container>
  )
}

export default Home
