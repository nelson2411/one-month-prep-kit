// Given a square matrix , calculate the absolute difference between the sums
// of its diagonals.
// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9

function diagonalDifference(arr) {
  let leftToRight = 0;
  let rightToLeft = 0;
  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i]; // Here we evaluate a 2-D value at a given index
    rightToLeft += arr[i][arr.length - 1 - i]; // Here we evaluate a 2-D value at a given index
  }
  return Math.abs(leftToRight - rightToLeft); // Here we calculate the absolute difference
}
