function getProtein (codon: string): string {
  switch (codon) {
    case 'AUG':
      return 'Methionine'
    case 'UUU':
    case 'UUC':
      return 'Phenylalanine'
    case 'UUA':
    case 'UUG':
      return 'Leucine'
    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':
      return 'Serine'
    case 'UAU':
    case 'UAC':
      return 'Tyrosine'
    case 'UGU':
    case 'UGC':
      return 'Cysteine'
    case 'UGG':
      return 'Tryptophan'
    case 'UAA':
    case 'UAG':
    case 'UGA':
      return 'STOP'
    default:
      throw new Error('Invalid codon')
  }
}

export function translate (sequence: string): string[] {
  const codons = sequence.match(/.{1,3}/g) || []
  const proteins: string[] = []
  for (const codon of codons) {
    const protein = getProtein(codon)
    if (protein === 'STOP') {
      break
    }
    proteins.push(protein)
  }
  return proteins
    .filter(protein => protein !== 'STOP')
  // .join(',')
}
