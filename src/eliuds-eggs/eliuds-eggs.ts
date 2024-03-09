//
// This is only a SKELETON file for the 'Pop Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const eggCount = (displayValue: number): number => {
  let eggCount = 0;
  let remainingValue = displayValue;
  while (remainingValue > 0) {
    const eggValue = Math.pow(2, Math.floor(Math.log2(remainingValue)));
    remainingValue -= eggValue;
    eggCount++;
  }
  return eggCount;
}
