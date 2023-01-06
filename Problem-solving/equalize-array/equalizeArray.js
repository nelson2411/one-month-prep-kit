/* 

Given an array of integers, determine the minimum number of elements to delete to 
leave only elements of equal value.

Example: 

const array1 = [3, 2, 1, 3]

delete the 2 and 1 leaving 3 3. 2 elements need to be deleted.
the minimum number of elements to delete is 2.

Create a function that takes an array of integers and returns the minimum
 number of elements to delete.

*/

const arr = [3, 2, 1, 3]

const equalizeArray = (arr) => {
  let count = 0
  let max = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++
      }
    }
    if (count > max) {
      max = count
    }
    count = 0
  }
  return arr.length - max
}

/* 
Write this function using pseudocode

function equalizeArray(arr)
count = 0
max = 0

repeat starting with i = 0 until reaching n - 1 with increments of 1 Do
    repeat starting with j = 0 until reaching n - 1 with increments of 1 Do
        if arr[i] = arr[j] then
        increment count by 1
        end if
    end repeat
    if count is greater than max then
        set max to count
    end if
    set count to 0
end repeat
return n - max
*/
