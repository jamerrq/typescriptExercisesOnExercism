export function clean (phoneNumber: string) {
  // Puntuactions not permitted '123-@:!-7890' -> Error
  // Letters not permitted '123-abc-7890' -> Error
  if (/[@!]/.test(phoneNumber)) {
    throw new Error('Punctuations not permitted')
  }
  if (/[a-z]/i.test(phoneNumber)) {
    throw new Error('Letters not permitted')
  }
  let cleaned = phoneNumber.replace(/\D/g, '')
  // More than 11 digits -> Error
  if (cleaned.length > 11) {
    throw new Error('More than 11 digits')
  }
  // If first digit is 1 and length is 11, remove first digit
  if (cleaned.length === 11) {
    if (cleaned[0] !== '1') {
      throw new Error('11 digits must start with 1')
    }
    cleaned = cleaned.slice(1)
  }
  // If length is not 10, throw error
  if (cleaned.length !== 10) {
    throw new Error('Incorrect number of digits')
  }
  let areaCode = cleaned.slice(0, 3), exchangeCode = cleaned.slice(3, 6),
    subscriberNumber = cleaned.slice(6)

  // Area code cannot start with 0 or 1
  if (areaCode[0] === '0') {
    throw new Error('Area code cannot start with zero')
  }
  if (areaCode[0] === '1') {
    throw new Error('Area code cannot start with one')
  }
  // Exchange code cannot start with 0 or 1
  if (exchangeCode[0] === '0') {
    throw new Error('Exchange code cannot start with zero')
  }
  if (exchangeCode[0] === '1') {
    throw new Error('Exchange code cannot start with one')
  }
  return areaCode + exchangeCode + subscriberNumber
}

// try {
//   console.log(clean('12234567890'))
// } catch (e: any) {
//   console.log(e.message)
// }
