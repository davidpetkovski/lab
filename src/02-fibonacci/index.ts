export function fibonacci(term: number): Array<number> {
  const arr: Array<number> = []

  if (term <= 0) {
    return arr
  }

  if (term > 0) {
    arr.push(0)
  }

  if (term > 1) {
    arr.push(1)
  }

  for (let i = 2; i < term; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }

  return arr
}
