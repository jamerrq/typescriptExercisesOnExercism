export class Crypto {

  private readonly _plainText: string
  private _cipherText: string

  constructor(plainText: string) {
    this._plainText = plainText
    this._cipherText = plainText
    // Remove spaces
    this._cipherText = this._cipherText.replace(/\s/g, '')
    // Remove punctuation
    this._cipherText = this._cipherText.replace(/[^\w]/g, '')
    // Lowercase
    this._cipherText = this._cipherText.toLowerCase()
    // Split into chunks
    const chunkSize = Math.ceil(Math.sqrt(this._cipherText.length))
    const chunks: string[] = []
    for (let i = 0; i < this._cipherText.length; i += chunkSize) {
      chunks.push(this._cipherText.slice(i, i + chunkSize))
    }
    const transposedChunks: string[] = []
    for (let i = 0; i < chunkSize; i++) {
      transposedChunks.push('')
    }
    for (let i = 0; i < chunks.length; i++) {
      for (let j = 0; j < chunks[i].length; j++) {
        transposedChunks[j] += chunks[i][j]
      }
      for (let j = chunks[i].length; j < chunkSize; j++) {
        transposedChunks[j] += ' '
      }
    }
    this._cipherText = transposedChunks.join(' ')
  }

  get ciphertext (): string {
    return this._cipherText
  }
}

// const crypto = new Crypto('This is fun!')
// const crypto = new Crypto('Chill out.')
// console.log(crypto.ciphertext)
// console.log(crypto.ciphertext)
