export function recite (start: number, end: number): string {
  const days = [
    'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh',
    'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'
  ]
  const gifts = [
    'a Partridge in a Pear Tree.', 'two Turtle Doves', 'three French Hens',
    'four Calling Birds', 'five Gold Rings', 'six Geese-a-Laying',
    'seven Swans-a-Swimming', 'eight Maids-a-Milking', 'nine Ladies Dancing',
    'ten Lords-a-Leaping', 'eleven Pipers Piping', 'twelve Drummers Drumming'
  ]
  const lines = []
  for (let i = start - 1; i < end; i++) {
    lines.push(`On the ${days[i]} day of Christmas my true love gave to me:`)
    for (let j = i; j >= 0; j--) {
      if (i > 0 && j === 0) {
        lines.push(`, and ${gifts[j]}`)
      } else {
        if (i > 0 && j < i) lines.push(`,`)
        lines.push(` ${gifts[j]}`)
      }
    }
    lines.push('\n')
  }
  return lines.join('')
}
