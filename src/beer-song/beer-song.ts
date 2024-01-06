export function verse (index: number): string {
  const bottles = index === 1 ? 'bottle' : 'bottles'
  const firstLine = index === 0
    ? 'No more bottles of beer on the wall, no more bottles of beer.'
    : `${index} ${bottles} of beer on the wall, ${index} ${bottles} of beer.`
  const secondLine = index === 0
    ? 'Go to the store and buy some more, 99 bottles of beer on the wall.'
    : `Take ${index === 1 ? 'it' : 'one'} down and pass it around, ${index === 1 ? 'no more' : index - 1} ${index === 2 ? 'bottle' : 'bottles'} of beer on the wall.`
  return `${firstLine}\n${secondLine}\n`
}

export function sing (
  initialBottlesCount?: number,
  takeDownCount?: number
): string {
  const start = initialBottlesCount || 99
  const end = takeDownCount || 0
  const lines = []
  for (let i = start; i >= end; i--) {
    lines.push(verse(i))
  }
  return lines.join('\n')
}
