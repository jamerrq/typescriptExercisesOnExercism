interface Point {
  row: number
  column: number
}

export function saddlePoints (matrix: number[][]): Point[] {
  const points = [] as Point[]
  const maxByRows = matrix.reduce((acc, value) =>
    acc.concat(Math.max(...value)), [])
  const n = matrix?.length ?? 0, m = matrix[0]?.length ?? 0
  const minByCols = []
  for (let i = 0; i < m; ++i) {
    const coli = matrix.reduce((acc, value) =>
      acc.concat(value[i]), [] as number[])
    minByCols.push(Math.min(...coli))
  }

  for (let i = 0; i < n; ++i) {
    const maxInRow = maxByRows[i]
    for (let j = 0; j < m; ++j) {
      const minInCol = minByCols[j]
      if (minInCol !== maxInRow) continue
      const treeHeight = matrix[i][j]
      if (treeHeight !== minInCol) continue
      points.push({
        row: i + 1,
        column: j + 1
      })
    }
  }
  return points
}
