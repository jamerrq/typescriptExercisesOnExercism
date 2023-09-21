export function keep<T> (list: T[], predicate: (element: T) => boolean): T[] {
  return list.filter(predicate)
}

export function discard<T> (list: T[], predicate: (element: T) => boolean): T[] {
  return list.filter((element) => !predicate(element))
}
