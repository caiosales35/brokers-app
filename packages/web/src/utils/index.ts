export const centsToReal = (cents: string | number | undefined): string =>
  (Number(cents) / 100).toFixed(2)

export const handlWhatsappLink = (code?: string, phone?: string): string =>
  `http://wa.me/${code}${phone}`
