interface Input {
  maxFactor: number
  minFactor?: number
}

interface Palindrome {
  value: number
  factors: number[][]
}

let sieve = Array.from({ length: 1000000 }, () => true)
sieve[0] = false
sieve[1] = false
for (let i = 2; i < sieve.length; i++) {
  if (sieve[i]) {
    for (let j = i * i; j < sieve.length; j += i) {
      sieve[j] = false
    }
  }
}

const primes = sieve.map((isPrime, index) => isPrime ? index : -1).filter(prime => prime !== -1)

function isPalindrome (number: number): boolean {
  const string = number.toString()
  return string === string.split('').reverse().join('')
}

function getFactors (number: number, minValue: number,
  maxValue: number): number[][] {
  const factors: number[][] = []
  // no repeat factors
  const cache = new Set<number>()
  // console.log(realMin, maxValue)
  for (let i = minValue; i <= maxValue; i++) {
    if (cache.has(i)) {
      continue
    }
    // if number / i < minValue or number / i > maxValue, then continue
    if (number / i < minValue || number / i > maxValue) {
      continue
    }
    if (number % i === 0) {
      factors.push([i, number / i])
      cache.add(i)
      cache.add(number / i)
    }
  }
  return factors
}

export function generate (params: Input): { smallest: Palindrome, largest: Palindrome } {
  const min = params.minFactor || 1
  const max = params.maxFactor
  if (min > max) {
    throw new Error('min must be <= max')
  }
  const palindromes: Palindrome[] = []
  for (let i = min; i <= max; i++) {
    for (let j = i; j <= max; j++) {
      const product = i * j
      if (isPalindrome(product)) {
        palindromes.push({ value: product, factors: getFactors(product, min, max) })
      }
    }
  }
  palindromes.sort((a, b) => a.value - b.value)
  return {
    smallest: palindromes[0] ?? { value: null, factors: [] },
    largest: palindromes[palindromes.length - 1] ?? { value: null, factors: [] }
  }
}

// export function generate (params: Input): { smallest: Palindrome, largest: Palindrome } {
//   const min = params.minFactor || 1
//   const max = params.maxFactor

//   if (min > max) {
//     throw new Error('min must be <= max')
//   }

//   let smallest: Palindrome | null = null
//   let largest: Palindrome | null = null

//   for (let i = min; i <= max; i++) {
//     for (let j = i; j <= max; j++) {
//       const product = i * j

//       if (isPalindrome(product)) {
//         if (smallest === null || product < (smallest.value ?? Infinity)) {
//           smallest = { value: product, factors: getFactors(product, min, max) }
//         }
//         if (largest === null || product > (largest.value ?? -Infinity)) {
//           largest = { value: product, factors: getFactors(product, min, max) }
//         }
//       }
//     }
//   }

//   return {
//     smallest: smallest ?? { value: null, factors: [] as number[][] },
//     largest: largest ?? { value: null, factors: [] as number[][] },
//   }
// }
