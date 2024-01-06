export class List {

  private _values: List[]

  constructor(values: List[]) {
    this._values = values
  }

  public static create (...values: Array<number | List | Array<number>>): List {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.

    // Let's flatten the values array, so that we can use the same
    // constructor for both the empty list and the non-empty list.
    const flattenedValues = values.flat(Infinity) as List[]
    return new List(flattenedValues)
  }

  public get values (): List[] {
    return this._values
  }

  concat (list: List): List {
    return List.create(...this.values, ...list.values)
  }

  forEach (callback: (value: List, index: number, array: List[]) => void): void {
    this.values.forEach(callback)
  }

  append (list: List): List {
    return this.concat(list)
  }

  length (): number {
    return this.values.length
  }
}
