export function isArmstrongNumber (number: number | BigInt): boolean {
  if (typeof number === 'bigint') {
    const digits = number.toString().split('')
    const power = digits.length
    const sum = digits.reduce((x, digit) =>
      x + BigInt(digit) ** BigInt(power), BigInt(0))
    return sum === number
  }
  const digits = number.toString().split('')
  const power = digits.length
  const sum = digits.reduce((x, digit) => x + Number(digit) ** power, 0)
  return sum === Number(number)
}
