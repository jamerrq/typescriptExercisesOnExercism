// My solution
export function ofSize (size: number) {
  const matrix = new Array(size).fill(null).map(_ => new Array(size).fill(0))
  let i = 0, j = 0
  let temp = 1
  // r -> right, d -> down, l -> left, u -> up
  let dir = 'r'
  while (temp <= size ** 2) {
    matrix[i][j] = temp
    temp++
    // si viene derecha y llega al final de la fila
    // o se encuentra un número, vuelta hacia abajo
    if (dir === 'r') {
      if (j === size - 1 || matrix[i][j + 1]) {
        dir = 'd'
        i++
      } else {
        j++
      }
    }
    // si viene bajando y llega al final de la columna
    // o se encuentra un número, vuelta a la izquierda
    else if (dir === 'd') {
      if (i === size - 1 || matrix[i + 1][j]) {
        dir = 'l'
        j--
      } else {
        i++
      }
    }
    // console.log(i, j)
    // si viene izquierda y llega al principio de la fila
    // o se encuentra un número, vuelta hacia arriba
    else if (dir === 'l') {
      if (j === 0 || matrix[i][j - 1]) {
        dir = 'u'
        i--
      } else {
        j--
      }
    }
    // si viene subiendo y llega al principio de la columna
    // o se encuentra un número, vuelta hacia la derecha
    else if (dir === 'u') {
      if (i === 0 || matrix[i - 1][j]) {
        dir = 'r'
        j++
      } else {
        i--
      }
    }
  }
  return matrix
}

/* Copilot solution
export function ofSize (size: number) {
  const matrix: number[][] = []
  for (let i = 0; i < size; i++) {
    matrix.push([])
  }
  let x = 0
  let y = 0
  let dx = 1
  let dy = 0
  let i = 1
  while (i <= size * size) {
    matrix[y][x] = i
    if (x + dx >= size || x + dx < 0 || y + dy >= size || y + dy < 0 || matrix[y + dy][x + dx]) {
      const temp = dx
      dx = -dy
      dy = temp
    }
    x += dx
    y += dy
    i++
  }
  return matrix
}
 */
