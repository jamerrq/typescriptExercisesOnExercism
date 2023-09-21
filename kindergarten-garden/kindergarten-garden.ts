//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

const DEFAULT_STUDENTS: Student[] = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
]

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
} as const

type Student = string
type Plant = (typeof PLANT_CODES)[keyof typeof PLANT_CODES]
type Plants = Plant[]
type Pots = Plants[]

export class Garden {

  private pots: Pots
  private students: Student[]

  private parse (diagram: string): Pots {
    const rows = diagram.split('\n')
    const n = this.students.length
    const pots: Pots = Array(n).fill(new Array<Plant>(0))
    for (let i = 0; i < n; i++) {
      const student_pot = [] as Plants
      for(let j = 0; j < rows.length; ++j){
        const row = rows[j]
        student_pot.push(PLANT_CODES[row[2*i] as keyof typeof PLANT_CODES])
        student_pot.push(PLANT_CODES[row[2*i+1] as keyof typeof PLANT_CODES])
      }
      pots[i] = student_pot
    }
    return pots
  }

  constructor(diagram: string, students = DEFAULT_STUDENTS) {
    this.students = students.sort()
    this.pots = this.parse(diagram)
    console.log(this.pots)
  }

  public plants (student: Student): Plants {
    return this.pots[this.students.indexOf(student)]
  }
}
