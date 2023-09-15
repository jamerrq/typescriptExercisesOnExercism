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

const primes = sieve.map((number, index) => number ? index : -1).filter(prime => prime !== -1)

function isPrime (number: number): boolean {
  return primes.includes(number)
}

export class DiffieHellman {

  private readonly _p: number
  private readonly _g: number

  constructor(p: number, g: number) {
    if (p < 1 || g < 1) {
      throw new Error('p and g must be positive integers')
    }
    if (!isPrime(p) || !isPrime(g)) {
      throw new Error('p and g must be prime')
    }
    this._p = p
    this._g = g
  }

  public getPublicKey (privateKey: number): number {
    if (privateKey < 2 || privateKey >= this._p) {
      throw new Error('private key must be between 2 and p-1')
    }
    return this._g ** privateKey % this._p
  }

  public getSecret (theirPublicKey: number, myPrivateKey: number): number {
    return theirPublicKey ** myPrivateKey % this._p
  }
}
