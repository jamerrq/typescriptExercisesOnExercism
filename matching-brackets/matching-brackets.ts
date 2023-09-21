export function isPaired (input: string): boolean {
  const stack = [] as string[], n = input.length
  for (let i = 0; i < n; i++) {
    const c = input[i]
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else if (c === ')' || c === ']' || c === '}') {
      const top = stack.pop()
      if(!top) return false
      if (top === '(' && c !== ')') return false
      if (top === '[' && c !== ']') return false
      if (top === '{' && c !== '}') return false
    }
  }
  return !stack.length
}
