// The median of a list of numbers is essentially its middle element after sorting.
// The same number of elements occur after it as before.
// Given a list of numbers with an odd number of elements, find the median
// Example:
// arr = [5,3,1,2,4]
// The sorted array should be: arr = [1,2,3,4,5]
// The middle element is 3, so the median is 3.5.

function findMedian(arr) {
  // arr mjust have an odd number of elements
  if (arr.length % 2 === 0) {
    alert("The array must have an odd number of elements");
  }

  // sort the array. We must use the native sort method because it is a built-in method.
  arr.sort(function (a, b) {
    return a - b;
  });

  let middle = Math.floor(arr.length / 2);

  return arr[middle];
}
