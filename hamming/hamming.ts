export function compute (left: string, right: string): number {
  if (left.length !== right.length) {
    throw new Error('DNA strands must be of equal length.')
  }

  return [...left].reduce((acc, curr, i) => {
    return curr !== right[i] ? acc + 1 : acc
  }, 0)
}
