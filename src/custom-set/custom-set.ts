export class CustomSet {

  private readonly elements: { [key: string]: number }
  private size: number
  private readonly hash: string

  constructor(initial?: number[]) {
    this.elements = {}
    this.size = 0
    this.hash = 'zanahoria'
    if (initial) {
      initial.forEach((element) => this.add(element))
    }
  }

  empty (): boolean {
    return this.size === 0
  }

  contains (element: number): boolean {
    return this.elements[element] === 1
  }

  add (element: number): CustomSet {
    this.elements[element] = 1
    this.size++
    return this
  }

  subset (other: CustomSet): boolean {
    return Object.keys(this.elements).every((element) => other.contains(Number(element)))
  }

  disjoint (other: CustomSet): boolean {
    return Object.keys(this.elements).every((element) => !other.contains(Number(element)))
  }

  eql (other: CustomSet): boolean {
    return this.subset(other) && other.subset(this)
  }

  union (other: CustomSet): CustomSet {
    return new CustomSet(Object.keys(this.elements).concat(Object.keys(other.elements)).map((element) => Number(element)))
  }

  intersection (other: CustomSet): CustomSet {
    return new CustomSet(Object.keys(this.elements).filter((element) => other.contains(Number(element))).map((element) => Number(element)))
  }

  difference (other: CustomSet): CustomSet {
    return new CustomSet(Object.keys(this.elements).filter((element) => !other.contains(Number(element))).map((element) => Number(element)))
  }
}
