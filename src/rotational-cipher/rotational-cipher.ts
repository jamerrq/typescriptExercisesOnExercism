export function rotate (message: string, places: number): string {
  return message.split('').reduce((acc, value) => {
    if (value.match(/[a-z]/i)) {
      const isUpperCase = value === value.toUpperCase()
      const charCode = value.toLowerCase().charCodeAt(0)
      const newCharCode = charCode + places
      const newChar = String.fromCharCode(newCharCode > 122 ? newCharCode - 26 : newCharCode)
      return acc + (isUpperCase ? newChar.toUpperCase() : newChar)
    }
    return acc + value
  }, '')
}
