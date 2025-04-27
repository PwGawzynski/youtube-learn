export function formatNumber(numStr: string): string {
  const num = parseInt(numStr, 10);
  if (Number.isNaN(num)) return '0';

  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
}
