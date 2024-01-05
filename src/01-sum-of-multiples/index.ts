export function sumOfMultiples(multiple: number, max: number): number {
  let i: number = 1
  let sum: number = 0
  while (i * multiple <= max) {
    sum += i * multiple
    i++
  }

  return sum
}
