export class ComplexNumber {
  private _real = 0
  private _imag = 0

  constructor(real: number, imaginary: number) {
    this._real = real
    this._imag = imaginary
  }

  public get real (): number {
    return this._real
  }

  public get imag (): number {
    return this._imag
  }

  public add (other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this._real + other.real, this._imag + other.imag)
  }

  public sub (other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this._real - other.real, this._imag - other.imag)
  }

  public div (other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      (this._real * other.real + this._imag * other.imag) /
      (other.real * other.real + other.imag * other.imag),
      (this._imag * other.real - this._real * other.imag) /
      (other.real * other.real + other.imag * other.imag)
    )
  }

  public mul (other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this._real * other.real - this._imag * other.imag,
      this._real * other.imag + this._imag * other.real
    )
  }

  public get abs (): number {
    return Math.abs(Math.sqrt(this._real * this._real +
      this._imag * this._imag))
  }

  public get conj (): ComplexNumber {
    if (this._imag === 0) {
      return new ComplexNumber(this._real, 0)
    }
    return new ComplexNumber(this._real, -this._imag)
  }

  public get exp (): ComplexNumber {
    return new ComplexNumber(
      Math.exp(this._real) * Math.cos(this._imag),
      Math.exp(this._real) * Math.sin(this._imag)
    )
  }
}
