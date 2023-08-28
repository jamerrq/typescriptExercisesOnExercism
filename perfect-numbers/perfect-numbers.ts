export function classify (number: number) {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.')
  }
  const divs = (n: number) => {
    const divisors = []
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        divisors.push(i)
      }
    }
    return divisors
  }
  const sum = (arr: number[]) => {
    return arr.reduce((acc, cur) => acc + cur, 0)
  }
  const aliquotSum = sum(divs(number))
  if (aliquotSum === number) {
    return 'perfect'
  }
  if (aliquotSum > number) {
    return 'abundant'
  }
  return 'deficient'
}
