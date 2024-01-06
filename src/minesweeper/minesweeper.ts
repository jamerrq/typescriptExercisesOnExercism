export function annotate (field: string[]): string[] {
  const rows = field.length
  if (rows === 0) {
    return []
  }
  const cols = field[0].length
  const result = []
  for (let i = 0; i < rows; i++) {
    let row = ''
    for (let j = 0; j < cols; j++) {
      if (field[i][j] === '*') {
        row += '*'
      } else {
        let count = 0
        for (let k = i - 1; k <= i + 1; k++) {
          if (k < 0 || k >= rows) {
            continue
          }
          for (let l = j - 1; l <= j + 1; l++) {
            if (l < 0 || l >= cols) {
              continue
            }
            if (field[k][l] === '*') {
              count++
            }
          }
        }
        row += count === 0 ? ' ' : String(count)
      }
    }
    result.push(row)
  }
  return result
}
