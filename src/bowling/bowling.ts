export class Bowling {
  private _leftFrames = 10;
  private _score = 0;
  private _firstRoll = true;
  private _bonus: number[] = [];
  private _lastRoll = 0;

  public roll (pins: number): void {
    // No negative rolls
    if (pins < 0) {
      throw new Error('Negative roll is invalid')
    }
    // No more than 10 pins per roll
    if (pins > 10) {
      throw new Error('Pin count exceeds pins on the lane')
    }
    // No more rolls after game is over and there are no bonus rolls
    if (this._leftFrames <= 0 && this._bonus.length <= 0) {
      throw new Error('Cannot roll after game is over')
    }
    // Update score
    this._score += pins
    // Bonus rolls
    if (this._bonus.length) {
      const bonus = this._bonus.shift()
      console.log('bonus: +', pins * bonus!)
      if (bonus !== undefined) {
        if (this._leftFrames <= 0) this._score += (pins * (bonus - 1))
        else this._score += bonus * pins
      }
    }
    // Strike
    if (pins === 10 && this._firstRoll) {
      // this._bonus = 2
      if (!this._leftFrames) {
        // do nothing
      } else {
        if (this._bonus.length) {
          this._bonus[0]++
          this._bonus.push(1)
        } else {
          this._bonus.push(1, 1)
        }
        this._leftFrames--
      }
    }
    // Spare
    else if (!this._firstRoll && this._lastRoll + pins >= 10) {
      if (this._lastRoll + pins > 10) {
        throw new Error('Pin count exceeds pins on the lane')
      }
      if (!this._leftFrames) {
        // do nothing
      } else {
        if (this._bonus.length) {
          this._bonus[0]++
        } else {
          this._bonus.push(1)
        }
        this._leftFrames--
      }
    }
    // Normal roll
    else {
      this._leftFrames -= !this._firstRoll ? 1 : 0
    }
    // Update state
    this._firstRoll = !this._firstRoll || pins === 10
    this._lastRoll = pins
  }

  public score (): number {
    // Game is not over
    if (this._leftFrames > 0 || this._bonus.length > 0) {
      throw new Error('Score cannot be taken until the end of the game')
    }
    // Return score
    return this._score
  }
}
