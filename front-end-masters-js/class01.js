// Define all array methods
// 1. forEach - executes a provided function once for each array element
// 2. map - creates a new array with the results of calling a provided function on every element in the calling array
// 3. filter - creates a new array with all elements that pass the test implemented by the provided function
// 4. find - returns the value of the first element in the array that satisfies the provided testing function
// 5. every - tests whether all elements in the array pass the test implemented by the provided function
// 6. some - tests whether some element in the array passes the test implemented by the provided function
// 7. reduce - applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value
// 8 pop - removes the last element from an array and returns that element
// 9. push - adds one or more elements to the end of an array and returns the new length of the array
// 10. shift - removes the first element from an array and returns that element
// 11. unshift - adds one or more elements to the front of an array and returns the new length of the array
// 12. slice - returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
// 13. splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// 14. sort - sorts the elements of an array in place and returns the array
// 15. reverse - reverses an array in place

// get the first element of an array
const first = (arr) => arr[0];
// get the last element of an array
const last = (arr) => arr[arr.length - 1];
// rmove the first element of an array
const removeFirst = (arr) => arr.slice(1);
// remove the last element of an array
const removeLast = (arr) => arr.slice(0, arr.length - 1);
// add an element to the front of an array
const addFirst = (arr, item) => [item].concat(arr);
// add an element to the end of an array
const addLast = (arr, item) => arr.concat([item]);
// example of using shift and unshift
const shift = (arr) => [arr[0], arr.slice(1)];
const unshift = (arr, item) => [item].concat(arr);

// Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

const uniqueSort = (arr) => {
  const breadCrumbs = {};
  return arr.sort((a, b) => a - b);
};

const uniqueSortV2 = (arr) => {
  const breadCrumbs = {}; // cache  of values
  const result = [arr[0]]; // add the first element

  for (let i = 1; i < arr.length; i++) {
    if (!breadCrumbs[arr[i]]) {
      // if the value is not in the cache
      result.push(arr[i]); // add it to the result
      breadCrumbs[arr[i]] = true; // add it to the cache
    }
  }
  return result.sort((a, b) => a - b);
};

// Create a function that multiply a number by ten
const timesTen = (num) => num * 10;

// store the cache in an object
const cacheTimesTen = {};

const memoTimesTen = (num) => {
  // memoized version
  if (cacheTimesTen[num]) {
    // if the value is in the cache
    return cacheTimesTen[num]; // return it
  } else {
    const result = timesTen(num); // otherwise call the function
    cacheTimesTen[num] = result; // add the result to the cache
    return result; // return the result
  }
};

// Find the factorial of a number using recursion

const factorial = (num) => {
  // store the cache in an object
  const cacheFactorial = {};
  if (num === 1) {
    return 1;
  } else {
    if (cacheFactorial[num]) {
      return cacheFactorial[num];
    } else {
      const result = num * factorial(num - 1);
      cacheFactorial[num] = result;
      return result;
    }
  }
};
