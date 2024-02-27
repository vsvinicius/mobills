export default function formatToCurrency(value: number) {
  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return currency.format(value);
}
