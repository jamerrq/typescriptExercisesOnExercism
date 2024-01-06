export class WordSearch {
  private _grid: string[]
  private _locations: { [key: string]: [number, number][] } = {};
  private _nrows: number
  private _ncols: number

  constructor(grid: string[]) {
    this._grid = grid
    this.findLocations()
    this._nrows = grid.length
    this._ncols = grid[0].length
  }

  private findLocations (): void {
    this._locations = {}
    for (const [rowIndex, row] of this._grid.entries()) {
      for (const [columnIndex, column] of row.split('').entries()) {
        if (!this._locations[column]) {
          this._locations[column] = []
        }
        this._locations[column].push([rowIndex, columnIndex])
      }
    }
  }

  private findWord (word: string): Record<string, number[]> | undefined {
    const word_length = word.length
    const first_letter = word[0]
    const locations = this._locations[first_letter]
    // console.log({ locations })
    if (!locations) {
      return undefined
    }
    for (const [rowIndex, columnIndex] of locations) {
      // console.log(this._grid.at(rowIndex).at(columnIndex))
      // Vertical
      if (columnIndex + word_length <= this._ncols) {
        const vertical = [
          ...this._grid // eslint-disable-line
            .at(rowIndex)
            ?.slice(columnIndex, columnIndex + word_length)!,
        ]
        // console.log({ vertical })
        if (vertical.join('') === word) {
          return {
            start: [rowIndex + 1, columnIndex + 1],
            end: [rowIndex + 1, columnIndex + word_length],
          }
        }
      }
      // Horizontal
      if (rowIndex + word_length <= this._nrows) {
        const horizontal = this._grid
          .slice(rowIndex, rowIndex + word_length)
          .map((row) => row[columnIndex])
        // console.log({ horizontal })
        if (horizontal.join('') === word) {
          return {
            start: [rowIndex + 1, columnIndex + 1],
            end: [rowIndex + word_length, columnIndex + 1],
          }
        }
      }
      // Diagonal (top left to bottom right)
      if (
        columnIndex + word_length <= this._ncols &&
        rowIndex + word_length <= this._nrows
      ) {
        const diagonal = this._grid
          .slice(rowIndex, rowIndex + word_length)
          .map((row, index) => row[columnIndex + index])
        // if (word === 'lisp') console.log({ diagonalTB: diagonal, rowIndex, columnIndex })
        if (diagonal.join('') === word) {
          return {
            start: [rowIndex + 1, columnIndex + 1],
            end: [rowIndex + word_length, columnIndex + word_length],
          }
        }
      }
      // Diagonal (bottom left to top right)
      if (
        columnIndex + word_length <= this._ncols &&
        rowIndex - word_length >= 0
      ) {
        const diagonal = this._grid
          .slice(rowIndex - word_length + 1, rowIndex + 1).reverse()
          .map((row, index) => row[columnIndex + index])
        // console.log({ diagonalBT: diagonal });
        if (diagonal.join('') === word) {
          return {
            start: [rowIndex + 1, columnIndex + 1],
            end: [rowIndex - word_length + 2, columnIndex + word_length],
          }
        }
      }
    }
    return undefined
  }

  public find (words: string[]): Record<string, any> {
    return words.reduce((acc: Record<string, any>, word) => {
      const result = this.findWord(word)
      if (result) {
        acc[word] = result
      } else {
        const reversed = word.split('').reverse().join('')
        const reversedResult = this.findWord(reversed)
        if (reversedResult) {
          acc[word] = {
            start: reversedResult.end,
            end: reversedResult.start,
          }
        } else {
          acc[word] = undefined
        }
      }
      return acc
    }, {})
  }
}
