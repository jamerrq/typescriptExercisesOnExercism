export class Series {

  private series: string

  constructor(series: string) {
    if (series === '') {
      throw new Error('series cannot be empty')
    }
    this.series = series
  }

  slices (sliceLength: number): number[][] {
    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero')
    }
    if (sliceLength < 0) {
      throw new Error('slice length cannot be negative')
    }
    if (sliceLength > this.series.length) {
      throw new Error('slice length cannot be greater than series length')
    }
    const seriesArray = this.series.split('').map(Number)
    const seriesLength = seriesArray.length
    const slices: number[][] = []
    for (let i = 0; i <= seriesLength - sliceLength; i++) {
      slices.push(seriesArray.slice(i, i + sliceLength))
    }
    return slices
  }
}
