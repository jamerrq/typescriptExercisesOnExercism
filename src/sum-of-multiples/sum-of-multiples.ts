export function sum (items: number[], level: number): number {
  let cache = new Set()
  return items.reduce((acc, item) => {
    for (let i = 1; i < level; i++) {
      if (item * i < level && !cache.has(item * i)) {
        acc += item * i
        cache.add(item * i)
      }
    }
    return acc
  }, 0)
}
