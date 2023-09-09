export function proverb (...args: string[]): string {
  return args.slice(0, -1).map((arg, index) => {
    return `For want of a ${arg} the ${args[index + 1]} was lost.`
  }).concat(`And all for the want of a ${args[0]}.`).join("\n")
}
