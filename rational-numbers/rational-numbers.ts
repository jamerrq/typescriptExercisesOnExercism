export class Rational {

    public numerator: number;
    public denominator: number;

    private static gcd(a: number, b: number): number {
        if (b === 0) {
            return a;
        };
        return Rational.gcd(b, a % b);
    };

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error('Denominator cannot be zero');
        };
        const gcd = Rational.gcd(numerator, denominator);
        this.numerator = numerator / gcd;
        this.denominator = denominator / gcd;
        // negative sign should be on numerator
        if (this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        };
    };

    add(otherRational: Rational): Rational {
        const numerator = this.numerator * otherRational.denominator + otherRational.numerator * this.denominator;
        const denominator = this.denominator * otherRational.denominator;
        // console.log(numerator, denominator);
        if (denominator < 0) {
            return new Rational(-numerator, -denominator);
        };
        return new Rational(numerator, denominator);
    }

    sub(otherRational: Rational): Rational {
        const numerator = this.numerator * otherRational.denominator - otherRational.numerator * this.denominator;
        const denominator = this.denominator * otherRational.denominator;
        return new Rational(numerator, denominator);
    }

    mul(otherRational: Rational): Rational {
        const numerator = this.numerator * otherRational.numerator;
        const denominator = this.denominator * otherRational.denominator;
        return new Rational(numerator, denominator);
    }

    div(otherRational: Rational): Rational {
        const numerator = this.numerator * otherRational.denominator;
        const denominator = this.denominator * otherRational.numerator;
        return new Rational(numerator, denominator);
    }

    abs(): Rational {
        const numerator = Math.abs(this.numerator);
        const denominator = Math.abs(this.denominator);
        return new Rational(numerator, denominator);
    }

    exprational(exponent: number): Rational {
        if (exponent < 0) {
            return new Rational(Math.pow(this.denominator, -exponent), Math.pow(this.numerator, -exponent));
        };
        const numerator = Math.pow(this.numerator, exponent);
        const denominator = Math.pow(this.denominator, exponent);
        return new Rational(numerator, denominator);
    }

    expreal(base: number): number {
        return Math.pow(base, this.numerator / this.denominator);
    }

    reduce(): Rational {
        if (this.numerator === 0) {
            return new Rational(0, 1);
        };
        return new Rational(this.numerator, this.denominator);
    }
}


