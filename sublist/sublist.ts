export class List {

  private _values: number[]

  constructor(...args: number[]) {
    this._values = args
  }

  get strValues (): string {
    return this._values.join(',')
  }

  compare (anotherList: List): string {
    let n = this._values.length, m = anotherList._values.length
    let thisStr = this.strValues, anotherStr = anotherList.strValues
    if (n < m) {
      // check if this is a sublist of anotherList
      if (anotherStr.indexOf(thisStr) !== -1) {
        return 'sublist'
      }
    } else if (n > m) {
      // check if anotherList is a sublist of this
      if (thisStr.indexOf(anotherStr) !== -1) {
        return 'superlist'
      }
    } else {
      // check if they are equal
      if (thisStr === anotherStr) {
        return 'equal'
      }
    }
    return 'unequal'
  }
}
