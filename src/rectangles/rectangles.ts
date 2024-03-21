export function count(input: string[]) {
  const crosses: boolean[][] = []
  const filled: boolean[][] = []
  const filledCols: boolean[][] = []
  for (let i = 0; i < input.length; i++) {
    const row = input[i]
    const crossRow: boolean[] = Array(row.length).fill(false)
      .map((_, j) => row[j] === '+'
      )
    const filledRow: boolean[] = Array(row.length).fill(false).map((_, j) =>
      row[j] === '+' || row[j] === '-'
    )
    const filledCol: boolean[] = Array(row.length).fill(false).map((_, j) =>
      row[j] === '+' || row[j] === '|'
    )
    crosses.push(crossRow)
    filled.push(filledRow)
    filledCols.push(filledCol)
  }
  let count = 0
  for (let i = 0; i < crosses.length; i++) {
    for (let j = 0; j < crosses[i].length; j++) {
      if (crosses[i][j]) {
        // look for corners
        for (let k = j + 1; k < crosses[i].length; k++) { // right top corner
          if (crosses[i][k]) {
            for (let l = i + 1; l < crosses.length; ++l) { // bottom corners
              if (crosses[l][k] && crosses[l][j]) {
                // check if it's a rectangle
                let isRectangle = true
                for (let m = i; m <= l; m++) {
                  if (!filledCols[m][j] || !filledCols[m][k]) {
                    isRectangle = false
                    break
                  }
                }
                for (let m = j; m <= k; m++) {
                  if (!filled[i][m] || !filled[l][m]) {
                    isRectangle = false
                    break
                  }
                }
                if (isRectangle) {
                  count++
                }
              }
            }
          }
        }
      }
    }
  }

  return count
}
