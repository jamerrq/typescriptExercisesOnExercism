export const largestProduct = (input: string, span: number): number => {
  const n = input.length
  if (span > n) {
    throw new Error('Span must be smaller than string length')
  }
  if (span < 0) {
    throw new Error('Span must not be negative')
  }
  if (!/^\d+$/.test(input)) {
    throw new Error('Digits input must only contain digits')
  }
  if (span === 0) {
    return 1
  }
  let max = input.slice(0, span).split('').reduce((acc, cur) => acc * parseInt(cur), 1)
  const zeroIndexes = input.split('').reduce((acc, cur, i) => {
    if (cur === '0') {
      acc.push(i)
    }
    return acc
  }, [] as number[])
  let cur = max
  for (let i = span; i < n; i++) {
    if (zeroIndexes.includes(i - span)) {
      cur = input.slice(i - span + 1, i + 1).split('').reduce((acc, cur) => acc * parseInt(cur), 1)
    } else {
      cur = cur / parseInt(input[i - span]) * parseInt(input[i])
    }
    if (cur > max) {
      max = cur
    }
  }
  return max
}
