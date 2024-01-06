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

export function nth (n: number) {
  if (n < 1) {
    throw new Error('Prime is not possible')
  }
  return primes[n - 1]
}
