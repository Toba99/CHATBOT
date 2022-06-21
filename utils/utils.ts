export const numberWithCommas = (num: number = 0): string => {
  const [whole] = num.toString().split('.')
  return `${whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}

export const formatToCurrency = (amount: number): string =>
  `₦${numberWithCommas(amount)}`

export const removeHtnlEncode = (car: string): string =>
  car
    .replace(/&#59/, ';')
    .replace(/&#38/, '&')
    .replace(/&#34/, '"')
    .replace(/&#39/, '')
    .replace(/&#44/, ',')
    .replace(/&#39/, '`')
