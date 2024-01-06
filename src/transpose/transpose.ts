// If the input has rows of different lengths, this is to be solved as follows:
// Pad to the left with spaces.
// Don't pad to the right.
export function transpose (lines: string[]) {
  if (lines.length === 0) {
    return []
  }

  const maxLength = Math.max(...lines.map(line => line.length))
  const paddedLines = lines.map(line => line)
  // console.log('paddedLines', paddedLines)
  const transposedLines = paddedLines[0].split('').map((_, index) => {
    return paddedLines.map(line => line[index] ?? '').join('')
  })
  return transposedLines
}

// const expected = [
//   'TT',
//   'hh',
//   'ee',
//   '  ',
//   'ff',
//   'oi',
//   'uf',
//   'rt',
//   'th',
//   'h ',
//   ' l',
//   'li',
//   'in',
//   'ne',
//   'e.',
//   '.',
// ]
// const result = transpose(['The fourth line.', 'The fifth line.'])

// // const result = transpose(['T', 'EE', 'AAA', 'SSSS', 'EEEEE', 'RRRRRR'])
// result.forEach((line, index) => console.log('*', line, '*', expected[index], '*'))

// result.forEach((line, index) => {
//   if (line !== expected[index]) {
//     console.log('Error at index', index)
//     console.log('Expected', expected[index])
//     console.log('Got', line)
//   }
// })
