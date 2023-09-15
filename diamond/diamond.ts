export function makeDiamond (character: string): string {
  if (character === 'A') {
    return 'A\n'
  }
  const lines = []
  // start by pushing the character line (the middle one)
  const spanSize = 2 * (character.charCodeAt(0) - 'A'.charCodeAt(0)) + 1
  const middleLine = `${character}${' '.repeat(spanSize - 2)}${character}`
  lines.push(middleLine)
  // now for each letter until A, push and unshift the lines
  // C -> B -> A
  const lineWitdh = middleLine.length
  console.log(`Line width: ${lineWitdh}`)
  for (let i = character.charCodeAt(0) - 1; i >= 'A'.charCodeAt(0); i--) {
    if (i === 'A'.charCodeAt(0)) {
      const padding = (lineWitdh - 1) / 2
      const line = `${' '.repeat(padding)}A${' '.repeat(padding)}`
      lines.unshift(line)
      lines.push(line)
    } else {
      const padding = (lineWitdh - 1) / 2 - (i - 'A'.charCodeAt(0))
      const line = `${' '.repeat(padding)}${String.fromCharCode(i)}${' '.repeat(spanSize - 2 * padding - 2)}${String.fromCharCode(i)}${' '.repeat(padding)}`
      lines.unshift(line)
      lines.push(line)
    }
  }
  return lines.join('\n') + '\n'
}
