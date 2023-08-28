export class Allergies {
  private _knownAllergies: Record<number, string> = {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  }

  private _allergiesList: string[] = []

  constructor(allergenIndex: number) {
    // OWN SOLUTION
    let base = Math.floor(Math.log2(allergenIndex))
    let num = Math.pow(2, base)
    let allergie = this._knownAllergies[num]
    while (allergenIndex) {
      // console.log(allergenIndex)
      if (num > allergenIndex) {
        base--
        num = Math.pow(2, base)
        allergie = this._knownAllergies[num]
        continue
      }
      if (allergie) {
        this._allergiesList.push(allergie)
      }
      allergenIndex -= num
    }
    this._allergiesList.reverse()
  }

  public list (): string[] {
    return this._allergiesList
  }

  public allergicTo (allergen: string): boolean {
    return this._allergiesList.includes(allergen)
  }
}

// const instance = new Allergies(248)
// console.log(instance.list())

/**
 * COPILOT SOLUTION
 * constructor(allergenIndex: number) {
    let allergenIndexCopy = allergenIndex
    let allergenIndexBinary = allergenIndexCopy.toString(2)
    // console.log('allergenIndexBinary:', allergenIndexBinary)
    let allergenIndexBinaryArray = allergenIndexBinary.split('').reverse()
    let filtered = allergenIndexBinaryArray.map((value, index) => {
      if (value === '1') {
        return index
      }
    }).filter((value) => {
      return value !== undefined
    }) as number[]
    // console.log('filtered:', filtered)
    filtered.forEach((value) => {
      this._allergiesList.push(this._knownAllergies[Math.pow(2, value)])
    })
    // console.log('this._allergiesList:', this._allergiesList)

  }
 */
