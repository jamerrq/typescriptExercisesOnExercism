export function primes(n: number) {
  const sieve = new Array(n + 1).fill(true)
  sieve[0] = false
  sieve[1] = false

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (sieve[i]) {
      for (let j = i ** 2; j <= n; j += i) {
        sieve[j] = false
      }
    }
  }

  return sieve.reduce((primes, isPrime, i) => {
    if (isPrime) {
      primes.push(i)
    }
    return primes
  }, [] as number[])
}
