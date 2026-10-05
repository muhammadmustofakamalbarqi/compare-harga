export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount).replace(/\s+/g, '');
}

export function formatRupiahJuta(amount: number): string {
  const juta = amount / 1000000;
  if (Number.isInteger(juta)) {
    return `Rp${juta} jt`;
  }
  return `Rp${juta.toFixed(1).replace('.', ',')} jt`;
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}
