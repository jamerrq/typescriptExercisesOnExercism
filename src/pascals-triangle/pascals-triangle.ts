export class Triangle {
  private readonly n: number
  constructor (n: number) {
    this.n = n
  }

  get rows () {
    const rows = []
    for (let i = 0; i < this.n; i++) {
      const row = []
      for (let j = 0; j < i + 1; j++) {
        row.push(this.binomialCoefficient(i, j))
      }
      rows.push(row)
    }
    return rows
  }

  get lastRow () {
    return this.rows[this.n - 1]
  }

  private binomialCoefficient (n: number, k: number) {
    return this.factorial(n) / (this.factorial(k) * this.factorial(n - k))
  }

  private factorial (n: number) {
    let factorial = 1
    for (let i = 1; i <= n; i++) {
      factorial *= i
    }
    return factorial
  }
}
