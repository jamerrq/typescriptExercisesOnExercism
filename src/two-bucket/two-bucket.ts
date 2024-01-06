function gcd (a: number, b: number): number {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

export class TwoBucket {
  private _goal: number
  private _buckOne: number
  private _buckTwo: number
  private _starterBuck: boolean
  private _goalBucket: string
  private _otherBucket: number
  private _status_cache: { [key: string]: number }

  constructor(buckOne: number, buckTwo: number,
    goal: number, starterBuck: string) {
    this._goal = goal
    this._buckOne = buckOne
    this._buckTwo = buckTwo
    this._starterBuck = starterBuck === 'one'
    this._goalBucket = ''
    this._otherBucket = 0
    this._status_cache = {}
  }

  movesAux (options: {
    buckOneCap: number, buckTwoCap: number,
    buckOneFill: number, buckTwoFill: number,
    turn: boolean, currentMoves: number, goal: number
  }): number {
    let { buckOneCap, buckTwoCap, buckOneFill, buckTwoFill, turn, currentMoves, goal } = options
    if (buckOneFill === goal || buckTwoFill === goal) {
      console.log('buckOneFill', buckOneFill, 'buckTwoFill', buckTwoFill)
      return currentMoves
    }
    // if this status was previously visited, ignore it
    if (this._status_cache[`${buckOneFill} ${buckTwoFill}`]) {
      return this._status_cache[`${buckOneFill} ${buckTwoFill}`]
    }

    // Option 1
    // Pouring one bucket into the other bucket until either: a) the first
    // bucket is empty b) the second bucket is full

    let [tmpBuckOne, tmpBuckTwo, tmpBuckOneCap, tmpBuckTwoCap] = turn
      ? [buckOneFill, buckTwoFill, buckOneCap, buckTwoCap]
      : [buckTwoFill, buckOneFill, buckTwoCap, buckOneCap]

    let maxPour = Math.min(buckTwoCap - tmpBuckTwo, tmpBuckOne)

    let option1Params = {
      ...options,
      buckOneFill: turn ? buckOneFill - maxPour : buckOneFill + maxPour,
      buckTwoFill: turn ? buckTwoFill + maxPour : buckTwoFill - maxPour,
      currentMoves: currentMoves + 1,
      turn: !turn
    }

    let option1moves = this.movesAux(option1Params)

    // Option 2
    // Emptying a bucket and doing nothing to the other.

    let option2Params = {
      ...options,
      buckOneFill: turn ? 0 : buckOneFill,
      buckTwoFill: turn ? buckTwoFill : 0,
      turn: !turn,
      currentMoves: currentMoves + 1
    }

    let option2moves = this.movesAux(option2Params)

    // Option 3
    // Filling a bucket and doing nothing to the other.

    let option3Params = {
      ...options,
      buckOneFill: turn ? buckOneCap : buckOneFill,
      buckTwoFill: turn ? buckTwoFill : buckTwoCap,
      turn: !turn,
      currentMoves: currentMoves + 1
    }

    let option3moves = this.movesAux(option3Params)

    console.log('Move #', currentMoves, 'Option 1:', option1moves, 'Option 2:', option2moves, 'Option 3:', option3moves)

    this._status_cache[`${buckOneFill} ${buckTwoFill}`] = Math.min(option1moves, option2moves, option3moves)
    return this._status_cache[`${buckOneFill} ${buckTwoFill}`]
  }

  moves (): number {
    const options = {
      buckOneCap: this._buckOne,
      buckTwoCap: this._buckTwo,
      buckOneFill: this._starterBuck ? this._buckOne : 0,
      buckTwoFill: this._starterBuck ? 0 : this._buckTwo,
      turn: this._starterBuck,
      currentMoves: 1,
      goal: this._goal
    }
    return this.movesAux(options)
  }

  get goalBucket (): string {
    return this._goalBucket
  }

  get otherBucket (): number {
    return this._otherBucket
  }
}

const buckOne = 3
const buckTwo = 5
const goal = 1
const starterBuck = 'one'
const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck)
console.log(twoBucket.moves())
