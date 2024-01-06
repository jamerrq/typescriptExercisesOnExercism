export class Matrix {

    private _rows: Number[][];
    private _columns: Number[][];

    constructor(stringVersionOfMatrix: string) {
        this._rows = stringVersionOfMatrix.split('\n').map(row => row.split(' ').map(Number));
        this._columns = this._rows[0].map((_, i) => this._rows.map(row => row[i]));
    };

    get rows(): Number[][] {
        return this._rows;
    };

    get columns(): Number[][] {
        return this._columns;
    };
};
