export class Robot {

    private _name: string;
    private static _names: string[] = [];

    private generateName(): string {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];
        const randomNumber = () => numbers[Math.floor(Math.random() * numbers.length)];
        const randomName = () => `${randomLetter()}${randomLetter()}${randomNumber()}${randomNumber()}${randomNumber()}`;
        let name = randomName();
        while (Robot._names.includes(name)) {
            name = randomName();
        };
        Robot._names.push(name);
        return name;
    };

    constructor() {
        this._name = this.generateName();
    };

    public get name(): string {
        return this._name;
    };

    public resetName(): void {
        this._name = this.generateName();
    };

    public static releaseNames(): void {

    };
};
