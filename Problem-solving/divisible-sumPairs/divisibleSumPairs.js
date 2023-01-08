/*
given an array of integers and a positive integer k, determine the number of (i,j) pairs 
where i<j and ar[i]+ar[j] is divisible by k. 

Example input: 

ar = [1,2,3,4,5,6]
k = 5

output: 3

3 meaning that there are 3 pairs that meet the criteria: (1,4), (2,3), (4,6)

we must create a function that takes: 

n = the length of the array
ar = the array of integers
k = the positive integer

and return the number of pairs that meet the criteria.
*/

function divisibleSumPairs(n, k, ar) {
  let count = 0 // initialize the count to 0
  for (let i = 0; i < n; i++) {
    // iterate through the array of integers
    for (let j = i + 1; j < n; j++) {
      // iterate through the array of integers in order to compare the current element to the next element
      if ((ar[i] + ar[j]) % k === 0) {
        // if the sum of the current element and the next element is divisible by k
        count++ // increment the count
      }
    }
  }
  return count
}

/* 

Writing the solution in pseudo-code:

function divisibleSumPairs(n, k, ar)
  count = 0
  Repeat starting with i = 0 Until Reaching n - 1 with increments of 1 Do
    Repeat starting with j = i + 1 Until Reaching n - 1 with increments of 1 Do
    IF (ar[i] + ar[j]) % k === 0 THEN
      increment count by 1
    END IF
  END REPEAT
  END REPEAT
  return count




*/
