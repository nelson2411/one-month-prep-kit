/* 



*/

const n = 5
const arr = [1, 2, 4, 5, 3]

const insertionSortOne = (n, arr) => {
  let last = arr[n - 1] // last element of the array
  let i = n - 2 // index of the last element of the array
  while (i >= 0 && arr[i] > last) {
    // while the index is greater than 0 and the element at the index is greater than the last element
    arr[i + 1] = arr[i] // move the element at the index to the right
    console.log(arr.join(" ")) // print the array
    i-- // decrement the index
  }
  arr[i + 1] = last // insert the last element at the index
  console.log(arr.join(" ")) // print the array
}
