export class List {

    private values: number[] = [];

    constructor(...values: number[]) {
        this.values = values;
    }

    public static create(...values: number[]): List {
        return new List(...values);
    }

    public append(list: List): List {
        return new List(...this.values, ...list.values);
    }

    public concat(list: List): List {
        return new List(...this.values, ...list.values);
    }

    public filter(predicate: (value: number) => boolean): List {
        return new List(...this.values.filter(predicate));
    }

    public length(): number {
        return this.values.length;
    }

    public map(mapper: (value: number) => number): List {
        return new List(...this.values.map(mapper));
    }

    public foldl(reducer: (acc: number, value: number) => number, initial: number): number {
        return this.values.reduce(reducer, initial);
    }

    public foldr(reducer: (acc: number, value: number) => number, initial: number): number {
        return this.values.reduceRight(reducer, initial);
    }

    public reverse(): List {
        return new List(...this.values.reverse());
    }

    public forEach(callback: (value: number) => void): void {
        this.values.forEach(callback);
    }

}
