export class Bowling {

  private _turn = 1 // from 1 to 10
  private _score = 0
  private _pins = 0 // to store the number of pins knocked down in the current turn
  private _rolls = [] as number[] // to store the number of pins knocked down in each roll
  private _additionalRolls = 0 // to store the number of additional rolls in the last turn
  private _miniTurn = 0 // 0: first roll, 1: second roll
  private _isSpare = false
  private _strikeLevels = {} as Record<number, number>
  private _strikes = 0

  public roll (pins: number): void {
    if (this._turn > 10) {
      if (this._additionalRolls) {
        // console.log('in additional roll, adding', pins, 'to score')
        this._score += pins
        this._additionalRolls--
        return
      }
      console.log('there is no additional roll', this._turn)
      throw new Error('Game is over')
    }
    if (pins < 0 || pins > 10) {
      throw new Error('Invalid roll')
    }
    if (this._isSpare) {
      // console.log(`in spare, turn ${this._turn} adding ${pins} to result`)
      this._score += pins
      this._isSpare = false
    }
    const turnIndex = this._turn * 2 + this._miniTurn - this._strikes
    if (this._strikeLevels[turnIndex]) {
      // console.log(`strike level ${this._strikeLevels[turnIndex]} for ${pins}`)
      this._score += this._strikeLevels[turnIndex] * pins
    }
    this._score += pins
    this._rolls.push(pins)
    this._pins += pins
    if (pins === 10) {
      this._strikes++
      if (!this._strikeLevels[turnIndex + 1]) {
        this._strikeLevels[turnIndex + 1] = 0
      }
      if (!this._strikeLevels[turnIndex + 2]) {
        this._strikeLevels[turnIndex + 2] = 0
      }
      this._strikeLevels[turnIndex + 1] += 1
      this._strikeLevels[turnIndex + 2] += 1
      if (this._turn === 10) {
        this._additionalRolls = 2
      }
    }
    // if(this._pins === 10){
    // console.log(`turn ${this._turn} miniTurn ${this._miniTurn}`)
    // }
    if (this._miniTurn === 1 && this._pins === 10) {
      this._isSpare = true
      if (this._turn === 10) {
        this._additionalRolls++
      }
    }
    if (pins !== 10) {
      this._miniTurn++
      this._miniTurn %= 2
      if (this._miniTurn === 0) {
        this._turn++
        this._pins = 0
      }
    } else {
      this._miniTurn = 0
      this._turn++
      this._pins = 0
    }
  }

  public score (): number {
    return this._score
  }
}

// const rolls = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// const rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// const rolls = [
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1,
// ]
// const rolls = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let rolls: number[]
// const rolls = [10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// console.log(rolls.length)
if (rolls) {
  const bowling = new Bowling()
  rolls?.forEach((roll) => {
    bowling.roll(roll)
  })
  console.log(bowling.score())
}
