
export const formatterMoney = (value: number): string => {
  const formatter = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN'
  })

  return formatter.format(value)
}
