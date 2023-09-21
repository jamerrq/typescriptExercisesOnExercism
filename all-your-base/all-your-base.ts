export function convert(
  digits: number[],
  inputBase: number,
  outputBase: number
): number[] {
  if (inputBase < 2 || parseInt(inputBase.toString()) !== inputBase) {
    throw new Error('Wrong input base')
  }
  if (outputBase < 2 || parseInt(outputBase.toString()) !== outputBase) {
    throw new Error('Wrong output base')
  }
  if (digits.length === 0) {
    throw new Error('Input has wrong format')
  }
  if (digits[0] === 0 && digits.length > 1) {
    throw new Error('Input has wrong format')
  }
  if (digits.some((digit) => digit < 0)) {
    throw new Error('Input has wrong format')
  }
  if (digits.some((digit) => digit >= inputBase)) {
    throw new Error('Input has wrong format')
  }
  if (digits.length === 1 && digits[0] === 0) {
    return [0]
  }
  const decimal = digits.reduce((acc, digit) => acc * inputBase + digit, 0)
  const result = []
  let remainder = decimal
  while (remainder > 0) {
    result.unshift(remainder % outputBase)
    remainder = Math.floor(remainder / outputBase)
  }
  return result
}
