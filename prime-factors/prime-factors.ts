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


export function calculatePrimeFactors (n: number): number[] {
  let factors = []
  let i = 0
  while (n > 1) {
    if (n % primes[i] === 0) {
      factors.push(primes[i])
      n /= primes[i]
    } else {
      i++
    }
  }
  return factors
}
