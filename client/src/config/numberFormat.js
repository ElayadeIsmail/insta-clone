export default function numberFormatter(num) {
  if (Math.abs(num) < 999) return Math.sign(num) * Math.abs(num);
  if (Math.abs(num) > 999)
    return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k';
  if (Math.abs(num) > 999999)
    return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'M';
}
