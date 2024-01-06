const pronouns: string[] = [
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

const verbs: string[] = [
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
  return Array.from({ length: index - 1 }, (_, i) => `that ${verbs[i]} ${pronouns[i]}`).concat([`This is ${pronouns[index - 1]}`]).reverse()
}

export function verses (start: number, end: number): string[] {
  return Array.from({ length: end - start + 1 }, (_, i) => verse(i + start).concat('')).flat().slice(0, -1)
}
