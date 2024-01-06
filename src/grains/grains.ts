export const square = (cell: number) => {
  if (cell < 1 || cell > 64) {
    throw new Error('square must be between 1 and 64')
  }
  return BigInt(2 ** (cell - 1))
}

export const total = () => {
  return BigInt(2 ** 64) - BigInt(1)
}
