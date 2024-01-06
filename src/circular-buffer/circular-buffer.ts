export class BufferFullError extends Error {
  constructor() {
    super()
    this.name = 'BufferFullError'
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super()
    this.name = 'BufferEmptyError'
  }
}


export default class CircularBuffer<T> {

  private buffer: T[] = []
  private pointer = 0
  private size = 0
  private tail = 0

  constructor(initial: number) {
    this.buffer = new Array(initial)
    this.size = initial
  }

  write (value: T): void {
    console.log('Writing. Pointer:', this.pointer)
    if (this.pointer >= this.size) {
      throw new BufferFullError()
    }
    this.buffer[this.pointer++] = value
  }

  read (): T {
    console.log('Reading, tail:', this.tail)
    if (this.tail >= this.size) throw new BufferEmptyError()
    const value = this.buffer[this.tail++]
    return value
  }

  forceWrite (value: T): void {
    if (this.pointer === this.buffer.length) {
      this.buffer = [...this.buffer.slice(1), value]
      // this.head--
    }
    else {
      this.buffer[this.pointer++] = value
    }
    // this.write(value)
  }

  clear (): void {
    this.buffer = new Array(this.size)
    this.pointer = 0
  }
}

const buffer = new CircularBuffer<string>(5)
let reader
buffer.write('1')
buffer.write('2')
buffer.write('3')
reader = buffer.read()
// console.log('Expected: 1. Real:', reader)
reader = buffer.read()
// console.log(`Expected: 2. Real:`, reader)
buffer.write('4')
reader = buffer.read()
// console.log('Expected: 3. Real:', reader)
buffer.write('5')
buffer.write('6')
buffer.write('7')
buffer.write('8')
// buffer.forceWrite('A')
// buffer.forceWrite('B')

// for (let i = 0; i < 5; ++i) {
//   console.log(buffer.read())
// }

// expect(buffer.read()).toBe('6')
// expect(buffer.read()).toBe('7')
// expect(buffer.read()).toBe('8')
// expect(buffer.read()).toBe('A')
// expect(buffer.read()).toBe('B')
// expect(() => buffer.read()).toThrow(BufferEmptyError)

/**
 * Initial
 * [x,x,x,x,x]
 * -> write('1')
 * [1,x,x,x,x]
 * -> write('2')
 * [1,2,x,x,x]
 * -> write('3')
 * [1,2,3,x,x]
 * -> read()
 * [2,3,x,x,x] -> 1
 * -> read()
 * [3,x,x,x,x] -> 2
 * -> write('4')
 * [3,4,x,x,x]
 * -> read()
 * [4,x,x,x,x] -> 3
 * write(5 -> 8)
 * [4, 5, 6, 7, 8]
 */
