export function convert (raindrops: number): string {
  let result = ''
  if (raindrops % 3 === 0) {
    result += 'Pling'
  }
  if (raindrops % 5 === 0) {
    result += 'Plang'
  }
  if (raindrops % 7 === 0) {
    result += 'Plong'
  }
  if (result === '') {
    result = raindrops.toString()
  }
  return result
}
