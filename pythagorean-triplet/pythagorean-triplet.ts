type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}

type TripletType = [number, number, number]

export function triplets (options: Options): Triplet[] {
  const triplets: Triplet[] = []
  const { minFactor = 1, sum } = options
  const maxFactor = options.maxFactor || Math.floor(sum / 2)
  // a^2 + b^2 = c^2
  // a + b + c = sum
  for (let a = minFactor; a <= maxFactor; a++) {
    for (let b = a + 1; b <= maxFactor; b++) {
      const c = Math.sqrt(a * a + b * b)
      if (c % 1 === 0 && a + b + c === sum && c <= maxFactor) {
        triplets.push(new Triplet(a, b, c))
      }
    }
  }
  return triplets
}

class Triplet {

  private _numbers: [number, number, number]

  constructor(n1: number, n2: number, n3: number) {
    this._numbers = [n1, n2, n3]
  }

  toArray (): TripletType {
    return this._numbers
  }
}
