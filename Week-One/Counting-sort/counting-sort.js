// Comparison sorting
// Given a list of integers, count and return the number of times each value appears as an array of integers.

function countingSort(arr) {
  // We initialize an array with 100 elements and fill it with 0s
  let count = new Array(100).fill(0);
  arr.forEach((e) => {
    // We iterate over the array
    count[e]++; // We increment the value at the index of the current element
  });
  return count;
}
