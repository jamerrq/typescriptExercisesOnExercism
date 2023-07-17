export class GradeSchool {

    // define a roster as an object with keys as grades and values as arrays of
    // student names
    private _roster: { [key: number]: string[] };
    private _students = new Map<string, number>();

    constructor() {
        this._roster = {};
    };

    roster() {
        // return a copy of the roster
        return JSON.parse(JSON.stringify(this._roster));
    };

    add(student_name: string, student_grade: number) {



        // if the student is already in the roster, remove them
        if (this._students.has(student_name)) {

            const old_grade = this._students.get(student_name) as number;
            const old_index = this._roster[old_grade].indexOf(student_name);
            this._roster[old_grade].splice(old_index, 1);
            // if the grade is now empty, remove it
            if (this._roster[old_grade].length === 0) {
                delete this._roster[old_grade];
            };
        };
        // if the grade is not in the roster, add it
        if (!this._roster.hasOwnProperty(student_grade)) {
            this._roster[student_grade] = [];
        };
        // add the student to the grade
        this._roster[student_grade].push(student_name);
        // sort the students in the grade
        this._roster[student_grade].sort();
        // add the student to the students map
        this._students.set(student_name, student_grade);
    };

    grade(student_grade: number) {
        // if the grade is not in the roster, return an empty array
        if (!this._roster.hasOwnProperty(student_grade)) {
            return [];
        };
        // return a copy of the students in the grade
        return JSON.parse(JSON.stringify(this._roster[student_grade]));
    };

};
