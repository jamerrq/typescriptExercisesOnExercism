export function score(x: number, y: number): number {
    const distance = Math.sqrt(x * x + y * y);
    if (distance > 10) {
        return 0;
    } else if (distance > 5) {
        return 1;
    } else if (distance > 1) {
        return 5;
    } else {
        return 10;
    };
};
