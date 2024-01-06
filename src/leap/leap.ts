export function isLeap(year: number) {
    const isDivisibleBy = (divisor: number) => year % divisor === 0;
    return isDivisibleBy(4) && (!isDivisibleBy(100) || isDivisibleBy(400));
};
