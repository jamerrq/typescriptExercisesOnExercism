export class Clock {

    private _hour: number;
    private _minute: number;

    constructor(hour: number, minute?: number) {
        // Hour parameter can be negative and greater than 2(4);
        // Minute parameter can be negative and greater than 60;
        // If minute parameter is not provided, it is set to 0;
        // If minute parameter is greater than 60, it is converted to hours;

        if (!minute) minute = 0;
        if (minute >= 60) {
            hour += Math.floor(minute / 60);
            minute = minute % 60;
        };
        if (minute < 0) {
            hour += Math.floor(minute / 60);
            minute = 60 + (minute % 60);
        };
        if (hour >= 24) hour = hour % 24;
        if (hour < 0) hour = 24 + (hour % 24);

        this._hour = hour % 24;
        this._minute = minute % 60;
    };

    public toString(): string {
        const hourString = this._hour < 10 ? `0${this._hour}` : `${this._hour}`;
        const minuteString = this._minute < 10 ? `0${this._minute}` : `${this._minute}`;
        return `${hourString}:${minuteString}`;
    };

    public plus(minutes: number): Clock {
        return new Clock(this._hour, this._minute + minutes);
    };

    public minus(minutes: number): Clock {
        return new Clock(this._hour, this._minute - minutes);
    };

    public equals(other: Clock): boolean {
        return this.toString() === other.toString();
    };
};


// let clock: Clock = new Clock(-54, -11513);
// console.log(clock.toString());
