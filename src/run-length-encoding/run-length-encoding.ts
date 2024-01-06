export function encode(input: string): string {
  let result = ''
  let count = 1
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++
    } else {
      if(count === 1) {
        result += input[i]
      }else{
        result += count + input[i]
      }
      count = 1
    }
  }
  return result
}

export function decode(input: string): string {
  let result = ''
  let count = ''
  for (let i = 0; i < input.length; i++) {
    const char = input[i]
    if (char === String(Number(char))) {
      count += char
    } else {
      result += char.repeat(Number(count) || 1)
      count = ''
    }
  }
  return result
}
