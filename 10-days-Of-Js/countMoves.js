/*
given an array of integers of length n, determine the number of moves to make all 
the elements equal. Each move consists of choosing all but 1 and incrementing their
values by 1.

Example:
const array = [10, 15, 20]
const moves = 15 



*/

const numbers = [10, 15, 20]
const n = numbers.length

const countMoves = (numbers, n) => {
  let result = 0
  const minValue = Math.min(...numbers)

  for (let i = 0; i < n; i++) {
    result += numbers[i] - minValue // We assign the result of the subtraction to the result variable
  }

  return result
}

console.log(countMoves(numbers, n))
