const animals = [
  'fly',
  'spider',
  'bird',
  'cat',
  'dog',
  'goat',
  'cow',
  'horse',
]

const phrases = [
  'It wriggled and jiggled and tickled inside her.',
  'How absurd to swallow a bird!',
  'Imagine that, to swallow a cat!',
  'What a hog, to swallow a dog!',
  'Just opened her throat and swallowed a goat!',
  'I don\'t know how she swallowed a cow!',
]

export function verse (index: number): string {
  let result = `I know an old lady who swallowed a ${animals[index - 1]}.\n`
  if (index === 8) {
    return result + "She's dead, of course!\n"
  }
  if (index === 1) {
    return result + `I don't know why she swallowed the fly. Perhaps she'll die.\n`
  }
  if (index > 1) {
    result += phrases[index - 2] + '\n'
  }
  if (index < 8) {
    // result += `She swallowed the ${animals[index - 1]} to catch the ${animals[index - 2]}`
    // if (index === 3) {
    //   result += ' that wriggled and jiggled and tickled inside her'
    // }
    // result += '.\n'
    for (let i = index - 1; i > 0; i--) {
      result += `She swallowed the ${animals[i]} to catch the ${animals[i - 1]}`
      if (i === 2) {
        result += ' that wriggled and jiggled and tickled inside her'
      }
      result += '.\n'
    }
  }
  return result + `I don't know why she swallowed the fly. Perhaps she'll die.\n`
}

export function verses (start: number, end: number): string {
  let result = ''
  for (let i = start; i <= end; i++) {
    result += verse(i) + '\n'
  }
  return result.slice(0, -1)
}

// console.log(verses(1, 2))
// const expected = `I know an old lady who swallowed a fly.
// I don't know why she swallowed the fly. Perhaps she'll die.
// `
// const expected = `I know an old lady who swallowed a fly.
// I don't know why she swallowed the fly. Perhaps she'll die.

// I know an old lady who swallowed a spider.
// It wriggled and jiggled and tickled inside her.
// She swallowed the spider to catch the fly.
// I don't know why she swallowed the fly. Perhaps she'll die.
// `
// console.log('-------------------')
// console.log(expected)

/*
const expected = `I know an old lady who swallowed a fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`
I know an old lady who swallowed a fly.
I don't know why she swallowed the fly. Perhaps she'll die.
*/

// I know an old lady who swallowed a fly.
// I don't know why she swallowed the fly. Perhaps she'll die.
