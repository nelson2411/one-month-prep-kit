// Given an array of  distinct integers, transform the array into a zig zag
// sequence by permuting the array elements. A sequence will be called a zig zag
// sequence if the first  elements in the sequence are in increasing order and the
// last  elements are in decreasing order, where k = (n + 1) / 2.

// You need to find the lexicographically smallest zig zag sequence of the given array.

// Exampl:
// a = [2,3,5,1,4]
// n will be always odd
// n = 5
// k = (a.length + 1) / 2

// after the array is permuted the result will be:
// [1,4,5,2,3]
// return the elements of the new zig zag array in a single line

const input = [2, 3, 5, 1, 4];
const n = a.length;
const k = (n + 1) / 2;

const procesData = (input) => {
  // first step is to sort the array in ascending order
  const sortedArray = input.sort((a, b) => a - b);
  // put the largest element in the middle
  const middle = Math.floor(sortedArray.length / 2);
  const middleElement = sortedArray.splice(middle, 1)[0];
  // split the array into two parts
  const firstHalf = sortedArray.slice(0, middle);
  const secondHalf = sortedArray.slice(middle);
  // reverse the second half
  const reversedSecondHalf = secondHalf.reverse();
  // merge the two arrays
  const mergedArray = [];
  for (let i = 0; i < firstHalf.length; i++) {
    mergedArray.push(firstHalf[i]);
    mergedArray.push(reversedSecondHalf[i]);
  }
  // add the middle element
  mergedArray.push(middleElement);
  return mergedArray;
};
