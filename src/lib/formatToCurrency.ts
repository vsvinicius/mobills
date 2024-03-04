export default function formatToCurrency(value: number) {
  const currency = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  });
  return currency.format(value);
}
