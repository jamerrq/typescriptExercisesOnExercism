export class Triangle {

  private readonly sides: number[]
  private readonly isValidTriangle: boolean

  constructor(...sides: number[]) {
    this.sides = sides
    this.sides.sort((a, b) => a - b)
    this.isValidTriangle = this.sides[0] + this.sides[1] > this.sides[2]
  }

  get isEquilateral () {
    if(!this.isValidTriangle) return false
    return this.sides?.[0] && this.sides.every(side => side === this.sides[0])
  }

  get isIsosceles () {
    if(!this.isValidTriangle) return false
    return this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2]
  }

  get isScalene () {
    if(!this.isValidTriangle) return false
    return !this.isIsosceles && !this.isEquilateral
  }
}
