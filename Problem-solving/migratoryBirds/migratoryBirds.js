/*
Given an array of birds sightings where every element represents a bird type id, 
determine the id of the most frequently sighted type. If more than 1 type has been spotted
that maximum amount, return the smallest of their ids.
Return the smallest of the ids of the most frequently sighted birds.

Example input: 

ids = [1, 1, 2, 2, 3]

Example output:

1; where 1 is the most frequently sighted bird type id, keep in mind that 1 is smaller than 2 and 3.

We must create a function that takes an array of numbers as an argument and returns the 
smallest of the most frequently sighted birds.



*/

const arr = [1, 1, 2, 2, 3]

const migratoryBirds = (arr) => {
  let birds = 0
  let count = 0
  let birdsCount = {}
  for (let i = 0; i < arr.length; i++) {
    birdsCount[arr[i]] = (birdsCount[arr[i]] || 0) + 1 // If birdsCount[arr[i]] is undefined, set it to 0, then add 1 to it.
  }
  for (let bird in birdsCount) {
    if (birdsCount[bird] > count) {
      count = birdsCount[bird]
      birds = bird
    }
  }
  return birds
}

console.log(migratoryBirds(arr))

/* 

Write this solution in pseudocode:

arr = [1, 1, 2, 2, 3]

function migratoryBirds(arr) 
  birds = 0
  count = 0
  birdsCount = {}
  Repeat Starting at 0, until Reaching arr.length - 1, with increments of 1 Do
    birdsCount[arr[i]] = (birdsCount[arr[i]] || 0) + 1
  END REPEAT
  Repeat Starting at 0, until Reaching arr.length - 1, with increments of 1 Do
    IF birdsCount[bird] > count THEN
    count = birdsCount[bird]
    birds = bird
    END IF
  END REPEAT

  return birds


*/
