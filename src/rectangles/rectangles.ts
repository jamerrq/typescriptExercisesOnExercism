function countRectangles (lines: string[], i: number, j: number): number {
  let count = 0
  for (let k = i + 1; k < lines.length; k++) {
    const line = lines[k]
    if (line[j] !== '+') {
      break
    }
    for (let l = j + 1; l < line.length; l++) {
      const char = line[l]
      if (char !== '+') {
        break
      }
      if (lines[i][l] === '+' && lines[k][j] === '+') {
        count++
      }
    }
  }
  return count
}

export function count (lines: string[]): number {
  let count = 0
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    for (let j = 0; j < line.length; j++) {
      const char = line[j]
      if (char === '+') {
        count += countRectangles(lines, i, j)
      }
    }
  }
  return count
}
