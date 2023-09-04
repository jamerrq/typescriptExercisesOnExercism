const pronouns = [
  'the house that Jack built.',
  'the malt',
  'the rat',
  'the cat',
  'the dog',
  'the cow with the crumpled horn',
  'the maiden all forlorn',
  'the man all tattered and torn',
  'the priest all shaven and shorn',
  'the rooster that crowed in the morn',
  'the farmer sowing his corn',
  'the horse and the hound and the horn',
]

const verbs = [
  'lay in',
  'ate',
  'killed',
  'worried',
  'tossed',
  'milked',
  'kissed',
  'married',
  'woke',
  'kept',
  'belonged to',
]

export function verse (index: number): string[] {
  let verse: string[] = []
  for (let i = index - 1; i >= 0; i--) {
    if (i === index - 1) {
      verse.push(`This is ${pronouns[i]}`)
    } else {
      verse.push(`that ${verbs[i]} ${pronouns[i]}`)
    }
  }
  return verse
}

export function verses (start: number, end: number): string[] {
  let verses: string[] = []
  for (let i = start; i <= end; i++) {
    verses.push(...verse(i))
    verses.push('')
  }
  verses.pop()
  return verses
}

// console.log(verses(4, 8))
