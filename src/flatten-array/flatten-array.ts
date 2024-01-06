export function flatten (input: any[]): number[] {
  return input.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      acc.push(...flatten(cur))
    } else if (cur !== null && cur !== undefined) {
      acc.push(cur)
    }
    return acc
  }, [])
}
