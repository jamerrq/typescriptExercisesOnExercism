export function transform (old: { [key: string]: string[] }) {
  const newObject: { [key: string]: number } = {}
  for (const [key, value] of Object.entries(old)) {
    value.forEach(letter => newObject[letter.toLowerCase()] = Number(key))
  }
  return newObject
}
