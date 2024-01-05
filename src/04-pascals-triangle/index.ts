export function getPascalsTriangleRow(rowIndex: number): Array<number> {
  const arr: number[] = []

  for (let i = 0; i <= rowIndex; i++) {
    const newRow: number[] = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        newRow.push(1)
      } else {
        newRow.push(arr[j - 1] + arr[j])
      }
    }
    arr.splice(0, arr.length, ...newRow)
  }

  return arr
}
