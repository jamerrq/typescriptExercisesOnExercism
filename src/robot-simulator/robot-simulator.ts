export class InvalidInputError extends Error {
  constructor(message: string) {
    super()
    this.message = message || 'Invalid Input'
  }
}

type Direction = 'north' | 'east' | 'south' | 'west'
type Coordinates = [number, number]

export class Robot {

  private _bearing: Direction
  private _coordinates: Coordinates

  constructor() {
    this._bearing = 'north'
    this._coordinates = [0, 0]
  }

  get bearing (): Direction {
    return this._bearing
  }

  get coordinates (): Coordinates {
    return this._coordinates
  }

  place ({ x, y, direction }: { x: number; y: number; direction: string }): void {
    if(!['north', 'east', 'south', 'west'].includes(direction)) {
      throw new InvalidInputError('Invalid Input')
    }
    this._coordinates = [x, y]
    this._bearing = direction as Direction
  }

  turnRight (): void {
    switch (this._bearing) {
      case 'north':
        this._bearing = 'east'
        break
      case 'east':
        this._bearing = 'south'
        break
      case 'south':
        this._bearing = 'west'
        break
      case 'west':
        this._bearing = 'north'
        break
      default:
        throw new InvalidInputError('Invalid Input')
    }
  }

  turnLeft (): void {
    switch (this._bearing) {
      case 'north':
        this._bearing = 'west'
        break
      case 'east':
        this._bearing = 'north'
        break
      case 'south':
        this._bearing = 'east'
        break
      case 'west':
        this._bearing = 'south'
        break
      default:
        throw new InvalidInputError('Invalid Input')
    }
  }

  advance (): void {
    switch (this._bearing) {
      case 'north':
        this._coordinates[1]++
        break
      case 'east':
        this._coordinates[0]++
        break
      case 'south':
        this._coordinates[1]--
        break
      case 'west':
        this._coordinates[0]--
        break
      default:
        throw new InvalidInputError('Invalid Input')
    }
  }

  evaluate (instructions: string): void {
    instructions.split('').forEach(instruction => {
      switch (instruction) {
        case 'L':
          this.turnLeft()
          break
        case 'R':
          this.turnRight()
          break
        case 'A':
          this.advance()
          break
        default:
          throw new InvalidInputError('Invalid Input')
      }
    })
  }
}
