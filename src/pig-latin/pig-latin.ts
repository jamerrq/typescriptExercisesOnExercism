export function translate (word: string): string {
  const words = word.split(' ')
  if (words.length > 1) return words.map(translate).join(' ')
  // if has a 'y' after a consonant cluster move the consonant cluster to end
  // and add 'ay'
  if (word.match(/^[^aeiou]+y/))
    return word.replace(/^([^aeiou]+)(y.*)/, '$2$1') + 'ay'
  // if starts with vowel, add 'ay' to end
  if (word.match(/^[aeiou]/)) return word + 'ay'
  // if starts with consonant + 'qu' or just 'qu' move to end and add 'ay'
  if (word.match(/^[^aeiou]*qu/))
    return word.replace(/^([^aeiou]*qu)(.*)/, '$2$1') + 'ay'
  // if starts with consonant, move the consonant to end and add 'ay'
  if (word.match(/^[^aeiou]+/))
    return word.replace(/^([^aeiou]+)(.*)/, '$2$1') + 'ay'
  return word
}
