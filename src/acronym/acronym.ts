export function parse (phrase: string): string {
  return phrase
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(/[\s-]+/)
    .map(word => word[0].toUpperCase())
    .join('')
}
