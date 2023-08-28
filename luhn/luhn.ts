export function valid(digitString: string): boolean {
  digitString = digitString.replace(/ /g, '')
  if (digitString.length <= 1) {
    return false
  }
  let sum = 0
  let double = false
  for (let i = digitString.length - 1; i >= 0; i--) {
    const digit = parseInt(digitString[i])
    if (isNaN(digit)) {
      if (digitString[i] !== ' ') {
        return false
      }
      continue
    }
    if (double) {
      const doubled = digit * 2
      sum += doubled > 9 ? doubled - 9 : doubled
    } else {
      sum += digit
    }
    double = !double
  }
  return sum % 10 === 0
}
