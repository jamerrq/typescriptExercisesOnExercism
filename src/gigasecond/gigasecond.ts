export class Gigasecond {
  constructor(private readonly startDate: Date) { }

  date (): Date {
    const gigasecond = 1e12
    const endDate = new Date(this.startDate.getTime() + gigasecond)
    return endDate
  }
}
