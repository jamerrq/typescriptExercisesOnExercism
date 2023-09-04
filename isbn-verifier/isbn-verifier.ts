export function isValid (isbn: string): boolean {
  if (isbn.length < 10) return false
  const isbnDigits = isbn.replace(/-/g, '').split('')
  if (isbnDigits.length !== 10) return false
  const sum = isbnDigits.reduce((acc, cur, idx) => {
    if (cur === 'X') return acc + 10
    return acc + parseInt(cur) * (10 - idx)
  }
    , 0)
  // console.log(sum)
  return sum % 11 === 0
}

// console.log(isValid('3-598-2X507-9'))
