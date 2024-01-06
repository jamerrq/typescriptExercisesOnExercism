type Item = {
  weight: number
  value: number
}

export function maximumValue ({
  maximumWeight,
  items,
}: {
  maximumWeight: number
  items: Item[]
}): number {
  const dp = new Array(maximumWeight + 1).fill(0)

  for (let i = 0; i < items.length; i++) {
    const { weight, value } = items[i]

    for (let j = maximumWeight; j >= weight; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight] + value)
    }
  }

  return dp[maximumWeight]
}
