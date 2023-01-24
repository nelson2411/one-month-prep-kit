/*
John Watson knows of an operation called a right circular rotation on an array of integers.
One rotation operation moves the last array element to the first position and shifts all 
remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an 
array of integers. Sherlock is to perform the rotation operation a number of times then
determine the value of the element at a given position.
For each array, perform a number of right circular rotations and return the values of the 
elements at the given indices.

Example: 

a = [3, 4, 5]; meaning the array has 3 elements
k = 2 meaning the number of rotations
queries = [1, 2]; meaning the indices to return

Here K is the number of rotations, and the array is rotated 2 times.
We perform the rotations: [3, 4, 5] -> [5, 3, 4] -> [4, 5, 3]
Now return the values from the zero-based indices 1 and 2 as indicated in the queries array.
a[1] = 5
a[2] = 3

Create a function that takes 3 parameters: an array, a number of rotations, and an array of indices.
And returns the values of the elements at the given indices.


*/

const a = [1, 2, 3]
const k = 2
const queries = [0, 1, 2]

const circularArrayRotation = (a, k, queries) => {
  let result = []
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop()) // We use the unshift method to add the last element of the array to the beginning of the array, and the pop method to remove the last element of the array
  }
  for (let i = 0; i < queries.length; i++) {
    result.push(a[queries[i]]) // We push the elements of the array at the given indices to the result array
  }
  return result
}

console.log(circularArrayRotation(a, k, queries))
