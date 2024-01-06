function permute<T>(array: T[], length: number): T[][] {
  if (length === 1) {
    return array.map(item => [item])
  }
  const permutations: T[][] = []
  for (const item of array) {
    const remaining = permute(array.filter(i => i !== item), length - 1)
    for (const permutation of remaining) {
      permutations.push([item, ...permutation])
    }
  }
  return permutations
}

function isValid(
  letterToDigit: Map<string, number>,
  leftTerms: string[],
  rightTerms: string[],
): boolean {
  const leftSum = leftTerms
    .map(term => {
      let sum = 0
      for (let i = 0; i < term.length; i++) {
        const digit = letterToDigit.get(term[i])
        if (digit === undefined) {
          return 0
        }
        sum += digit * Math.pow(10, term.length - i - 1)
      }
      return sum
    })
    .reduce((sum, term) => sum + term, 0)
  const rightSum = rightTerms
    .map(term => {
      let sum = 0
      for (let i = 0; i < term.length; i++) {
        const digit = letterToDigit.get(term[i])
        if (digit === undefined) {
          return 0
        }
        sum += digit * Math.pow(10, term.length - i - 1) || 0
      }
      return sum
    })
    .reduce((sum, term) => sum + term, 0)
  return leftSum === rightSum
}

export function solve(puzzle: string): Record<string, number> {
  const [left, right] = puzzle.split(' == ')
  const leftTerms = left.split(' + ')
  const rightTerms = right.split(' + ')
  const allTerms = [...leftTerms, ...rightTerms]
  const uniqueLetters = [...new Set(allTerms.join('').split(''))]
  const firstLetters = [...new Set(allTerms.map(term => term[0]))]
  const letters = [...firstLetters, ...uniqueLetters]
  const digits = [...Array(10).keys()]
  const digitPermutations = permute(digits, letters.length)
  const letterToDigit = new Map<string, number>()
  for (const permutation of digitPermutations) {
    for (let i = 0; i < letters.length; i++) {
      letterToDigit.set(letters[i], permutation[i])
    }
    if (isValid(letterToDigit, leftTerms, rightTerms)) {
      return Object.fromEntries(letterToDigit.entries())
    }else{
      letterToDigit.clear()
    }
  }
  throw new Error('No solution found')
}
