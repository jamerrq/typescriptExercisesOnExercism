type Position = readonly [number, number]

type Positions = {
  white: Position
  black: Position
}
export class QueenAttack {
  public readonly black: Position
  public readonly white: Position

  // white: [whiteRow, whiteColumn]
  // black: [blackRow, blackColumn]
  constructor(partial: Partial<Positions> = {}) {
    // queens must be on the board
    if (partial.white && (partial.white[0] < 0 || partial.white[0] > 7 || partial.white[1] < 0 || partial.white[1] > 7)) {
      throw new Error('Queen must be placed on the board')
    }
    // queens cannot occupy the same space
    if (partial.white && partial.black && partial.white[0] === partial.black[0] && partial.white[1] === partial.black[1]) {
      throw new Error('Queens cannot share the same space')
    }
    this.white = partial.white || [7, 3]
    this.black = partial.black || [0, 3]
  }

  toString (): string {
    const board = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => '_'))
    board[this.white[0]][this.white[1]] = 'W'
    board[this.black[0]][this.black[1]] = 'B'
    return board.map(row => row.join(' ')).join('\n')
  }

  get canAttack () {
    const [whiteRow, whiteColumn] = this.white
    const [blackRow, blackColumn] = this.black
    return whiteRow === blackRow || whiteColumn === blackColumn || Math.abs(whiteRow - blackRow) === Math.abs(whiteColumn - blackColumn)
  }
}
