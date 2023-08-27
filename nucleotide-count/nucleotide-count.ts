export function nucleotideCounts (strand: string) {
  const nucleotides = ['A', 'C', 'G', 'T']
  const nucleotideCount = new Map<string, number>([
    ['A', 0],
    ['C', 0],
    ['G', 0],
    ['T', 0],
  ])

  for (const nucleotide of strand) {
    if (!nucleotides.includes(nucleotide)) {
      throw new Error('Invalid nucleotide in strand')
    }
    nucleotideCount.set(nucleotide, (nucleotideCount.get(nucleotide) || 0) + 1)
  }

  return Object.fromEntries(nucleotideCount)
}
