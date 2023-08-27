export function score (word: string | undefined): number {
  /*
  A, E, I, O, U, L, N, R, S, T       1
  D, G                               2
  B, C, M, P                         3
  F, H, V, W, Y                      4
  K                                  5
  J, X                               8
  Q, Z                               10
  */
  if (!word) return 0
  const letterScores = new Map<string, number>([])
  'AEIOULNRST'.split('').forEach(letter => letterScores.set(letter, 1))
  'DG'.split('').forEach(letter => letterScores.set(letter, 2))
  'BCMP'.split('').forEach(letter => letterScores.set(letter, 3))
  'FHVWY'.split('').forEach(letter => letterScores.set(letter, 4))
  'K'.split('').forEach(letter => letterScores.set(letter, 5))
  'JX'.split('').forEach(letter => letterScores.set(letter, 8))
  'QZ'.split('').forEach(letter => letterScores.set(letter, 10))
  return word.toUpperCase().split('').reduce((score, letter) =>
    score + (letterScores.get(letter) || 0), 0)
}
