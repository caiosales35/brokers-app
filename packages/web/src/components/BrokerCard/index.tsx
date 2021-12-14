/* eslint-disable camelcase */
import { Comission, Lead } from '@repo/database'
import React from 'react'
import { centsToReal, handlWhatsappLink } from '../../utils'
import { Container } from './styles'

export type BrokerCard = {
  key: number | string
  name?: string
  email?: string
  int_code?: string
  phone?: string
  comissions?: Comission[]
  leads?: Lead[] | string
  value?: number
}

const BrokerCard: React.FC<BrokerCard> = ({
  name,
  email,
  int_code,
  phone,
  comissions,
  leads,
  value
}) => {
  const brokerWhatsappLink = handlWhatsappLink(int_code, phone)
  const isLeadArray = Array.isArray(leads)

  return (
    <Container>
      <p>
        {name} - {email}
      </p>
      <a href={brokerWhatsappLink} target={'_blank'} rel="noreferrer">
        {int_code} {phone}
      </a>
      <hr />
      {comissions && <p>Comissões:</p>}
      {comissions?.map(
        comission =>
          comission?.key && (
            <p key={comission.key}>
              * {comission?.property_code} R$
              {centsToReal(comission?.value)}
              <p>{new Date(comission?.date || '').toLocaleDateString()}</p>
            </p>
          )
      )}
      <hr />
      {isLeadArray && <p>Leads:</p>}
      {isLeadArray &&
        leads.map(
          lead =>
            lead?.key && (
              <p key={lead.key}>
                - {lead?.name} {lead?.email}
                <p>
                  <a
                    href={handlWhatsappLink(lead?.int_code, lead?.phone)}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    {lead?.int_code} {lead?.phone}
                  </a>
                </p>
              </p>
            )
        )}

      {!isLeadArray && !value && <p>Quantidade de leads: {leads}</p>}
      <hr />
      {value && <p>Valor da comissão: R$ {centsToReal(value)}</p>}
    </Container>
  )
}

export default BrokerCard
