// sort an array with bubble sort method
// bubble sort is a simple sorting algorithm that repeatedly steps through
//the list to be sorted, compares each pair of adjacent items and swaps them
//if they are in the wrong order. The pass through the list is repeated until
//no swaps are needed, which indicates that the list is sorted.

const arr = [5, 4, 7, 2, 1, 0, 6, 3];

// we will use a nested loop to compare each element with the next element
// The big O notation of this algorithm is O(n^2)
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // loop through the array
    for (let j = 0; j < arr.length; j++) {
      // we loop through the array again
      if (arr[j] > arr[j + 1]) {
        // we compare each element with the next element
        // if the element is greater than the next element, we swap them
        let temp = arr[j];
        // we assign the value of the next element to the current element
        arr[j] = arr[j + 1];
        // we assign the value of the current element to the next element
        arr[j + 1] = temp; // we swap the elements
      }
    }
  }
  return arr;
};

// second approach excluding the last element from the loop
// The big O notation of this algorithm is O(n^2)
const bubbleSortTwo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // we reduce the number of iterations by one
    // we exclude the last element from the loop
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // If the current element is greater than the next element, we swap them
      if (arr[j] > arr[j + 1]) {
        // we compare each element with the next element
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
