function recognizeNumber (input: string) {
  switch (input) {
    case ' _ \n' + '| |\n' + '|_|\n' + '   ':
      return '0'
    case '   \n' + '  |\n' + '  |\n' + '   ':
      return '1'
    case ' _ \n' + ' _|\n' + '|_ \n' + '   ':
      return '2'
    case ' _ \n' + ' _|\n' + ' _|\n' + '   ':
      return '3'
    case '   \n' + '|_|\n' + '  |\n' + '   ':
      return '4'
    case ' _ \n' + '|_ \n' + ' _|\n' + '   ':
      return '5'
    case ' _ \n' + '|_ \n' + '|_|\n' + '   ':
      return '6'
    case ' _ \n' + '  |\n' + '  |\n' + '   ':
      return '7'
    case ' _ \n' + '|_|\n' + '|_|\n' + '   ':
      return '8'
    case ' _ \n' + '|_|\n' + ' _|\n' + '   ':
      return '9'
    default:
      return '?'
  }
}

export function convertLine (input: string) {
  const lines = input.split('\n')
  const numbers = []
  for (let i = 0; i < lines[0].length; i += 3) {
    const number = lines[0].slice(i, i + 3) + '\n' + lines[1].slice(i, i + 3) + '\n' + lines[2].slice(i, i + 3) + '\n' + lines[3].slice(i, i + 3)
    numbers.push(recognizeNumber(number))
  }
  return numbers.join('')
}

export function convert (input: string) {
  const lines = input.split('\n')
  const numbers = []
  for (let i = 0; i < lines.length; i += 4) {
    numbers.push(convertLine(lines.slice(i, i + 4).join('\n')))
  }
  return numbers.join(',')
}
