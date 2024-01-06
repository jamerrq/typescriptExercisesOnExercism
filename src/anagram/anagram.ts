export class Anagram {
  private readonly word: string

  constructor(input: string) {
    this.word = input
  }

  private sort(word: string): string {
    return word.split('').sort().join('')
  }

  private isAnagram(potential: string): boolean {
    const word = this.word.toLowerCase()
    const candidate = potential.toLowerCase()
    return word !== candidate && this.sort(word) === this.sort(candidate)
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter(potential => this.isAnagram(potential))
  }
}
