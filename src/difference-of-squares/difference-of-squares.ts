export class Squares {

    private sumOfSquaresValue: number = 0;
    private squareOfSumValue: number = 0;

    constructor(count: number) {
        for (let i = 1; i <= count; i++) {
            this.sumOfSquaresValue += i * i;
            this.squareOfSumValue += i;
        }
        this.squareOfSumValue *= this.squareOfSumValue;
    }

    get sumOfSquares(): number {
        return this.sumOfSquaresValue;
    }

    get squareOfSum(): number {
        return this.squareOfSumValue;
    }

    get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }
}
