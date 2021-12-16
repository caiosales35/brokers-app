export const centsToReal = (cents: string | number | undefined): string =>
  (Number(cents) / 100).toFixed(2)

export const handlWhatsappLink = (code?: string, phone?: string): string =>
  `http://wa.me/${code}${phone}`

export const handleQs = (name: string, phone: string): string => {
  let qs = '?'
  if (name && phone) qs = `${qs}name=${name}&phone=${phone}`
  else if (name) qs = `${qs}name=${name}`
  else if (phone) qs = `${qs}phone=${phone}`
  return qs
}

export const brokerQsToBrokerSearchParam = (qs: string): string => {
  return qs
    .replace('?', '')
    .replace('=', '')
    .replace('&', '')
    .replace('name', '')
    .replace('phone', '')
    .replace('=', ' ')
}
