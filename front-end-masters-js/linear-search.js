// Create a function that perform a linear search

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const item = 5;

const linearSearch = (list, item) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return i;
    }
  }
  return "Item not found";
};

// Create a function that fusion two arrays and sort them
// store the result in a new array

const arr1 = [3, 79];
const arr2 = [10, 88];

const fusion = (arr1, arr2) => {
  const arr3 = arr1.concat(arr2); // fusion the two arrays
  return arr3.sort((a, b) => a - b); // sort the new array
};
