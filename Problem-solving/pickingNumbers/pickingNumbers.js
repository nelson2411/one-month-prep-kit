/*
Given an array of integers, find the longest subarray where the absolute difference between 
any two elements is less than or equal to 1.

Example input: [1, 1, 2, 2, 4, 4, 5, 5, 5]
Output: 5, where the maximum length of subarray is [4, 4, 5, 5, 5]

Create a function that takes an array of integers as an argument and returns an integer 
meaning the length of the longest subarray that meets the criterion.

*/

const a = [4, 6, 5, 3, 3, 1]

const pickingNumbers = (a) => {
  let count = Array(100).fill(0) // 100 is the max value of the array filled with 0
  let max = 0
  for (let i = 0; i < a.length; i++) {
    // count the number of times each number appears
    count[a[i]]++ // count[4] = 1, count[6] = 1, count[5] = 1, count[3] = 2, count[1] = 1
  }
  for (let i = 0; i < count.length - 1; i++) {
    // loop through the count array
    max = Math.max(max, count[i] + count[i + 1])
  }
  return max
}

/* 
Write this function in pseudocode: 

function pickingNumbers(a) 
  count = Array(100).fill(0)
  max = 0
  Repeat starting with i = 0 Until Reaching a.length - 1 with increments of 1 Do
    increment count[a[i]] by 1
  END REPEAT
  Repeat starting with i = 0 Until Reaching count.length - 1 with increments of 1 Do
    max = Math.max(max, count[i] + count[i + 1])
  END REPEAT
  Print max
END FUNCTION

*/
