export class Board {

  private board: string[]
  private _winner: 'X' | 'O' | ''

  constructor(board: string[]) {
    this.board = board
    this._winner = ''
  }

  public winner (): 'X' | 'O' | '' {
    if (this._winner) {
      return this._winner
    }

    const board = this.board
    const size = board.length

    for (let i = 0; i < size; i++) {
      const row = board[i]
      const col = board.map(rowi => rowi[i]).join('')
      const diag1 = board.map((rowi, ri) => rowi[ri]).join('')
      const diag2 = board.map((rowi, ri) => rowi[size - 1 - ri]).join('')

      if (row === 'X'.repeat(size) || col === 'X'.repeat(size) || diag1 === 'X'.repeat(size) || diag2 === 'X'.repeat(size)) {
        this._winner = 'X'
        return 'X'
      }

      if (row === 'O'.repeat(size) || col === 'O'.repeat(size) || diag1 === 'O'.repeat(size) || diag2 === 'O'.repeat(size)) {
        this._winner = 'O'
        return 'O'
      }
    }

    return ''
  }
}
