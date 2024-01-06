export function encode (bytes: number[]) {
  // 1. convert each number to binary
  // 2. split each binary number into 7-bit chunks
  // 3. prepend each chunk with a 1, except the last chunk
  // 4. convert each chunk to a number
  // 5. reverse the order of the chunks
  // 6. convert each chunk to a byte
  // 7. return the bytes
  let binary = bytes.map(byte => byte.toString(2))
  let chunks = binary.map(binary => binary.match(/.{1,7}/g))
  let prepended = chunks.map(chunks => chunks?.map((chunk, index) => index === chunks.length - 1 ? chunk : '1' + chunk))
  let numbers = prepended.map(chunks => chunks?.map(chunk => parseInt(chunk, 2)))
  let reversed = numbers.map(chunks => chunks?.reverse())
  let bytes2 = reversed.map(chunks => chunks?.map(chunk => chunk + 128))
  return bytes2
}

export function decode (bytes: number[]) {
  // 1. convert each byte to binary
  // 2. split each binary number into 7-bit chunks
  // 3. remove the prepended 1 from each chunk, except the last chunk
  // 4. convert each chunk to a number
  // 5. reverse the order of the chunks
  // 6. convert each chunk to a byte
  // 7. return the bytes
  let binary = bytes.map(byte => (byte - 128).toString(2))
  let chunks = binary.map(binary => binary.match(/.{1,7}/g))
  let removed = chunks.map(chunks => chunks?.map((chunk, index) => index === chunks.length - 1 ? chunk : chunk.slice(1)))
  let numbers = removed.map(chunks => chunks?.map(chunk => parseInt(chunk, 2)))
  let reversed = numbers.map(chunks => chunks?.reverse())
  let bytes2 = reversed.map(chunks => chunks?.map(chunk => chunk))
  return bytes2
}
