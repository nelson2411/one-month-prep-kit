/* 
The median of a list of integers is basically its middle element after sorting.
The same number of elements occur after it as before.

given a list of numbers with an odd number of elements, can you find the median?

Example: 

const array1 = [0, 1, 2, 4, 6, 5, 3]

the median here is 3 after sorting the array.

Create a function findTheMedian that takes in an array of numbers and returns the median.


*/

const array1 = [0, 1, 2, 4, 6, 5, 3]

const findTheMedian = (array) => {
  array.sort((a, b) => a - b)
  return array[Math.floor(array.length / 2)] // Math.floor rounds down to the nearest integer
}

/* 

make a function that works for arrays with an even number of elements.

*/

const array2 = [0, 1, 2, 4, 6, 5, 3, 7]
console.log(array2.length) // 8

const sortArray2 = array2.sort((a, b) => a - b)
console.log(sortArray2) // [0, 1, 2, 3, 4, 5, 6, 7]
sortArray2.indexOf(3) // 3

const findTheMedian = (array) => {
  array.sort((a, b) => a - b)
  return (array[array.length / 2] + array[array.length / 2 - 1]) / 2
  // Math.floor rounds down to the nearest integer
}
