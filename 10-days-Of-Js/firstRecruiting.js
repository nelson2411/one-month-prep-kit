/* 
Create a function that takes an array as a parameter and 
return the first recurring character in the array

example: 

const array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
should return 2

const array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
should return 1

If the array doesn't have any recurring character return undefined

*/

const array = [2, 5, 1, 2, 3, 5, 1, 2, 4]

const firstRecurringCharacter = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // we add 1 to i because we don't want to compare the same number
      if (array[i] === array[j]) {
        return array[i]
      }
    }
  }
  return undefined
}

// The big O of this function is O(n^2) because we have two loops

console.log(firstRecurringCharacter(array))

const array2 = [3, 4, 3, 6, 7, 5, 4, 2, 1, 2, 4]

// solve the challenge using hash tables

const firstRecurringCharacter2 = (array) => {
  let map = {}
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] !== undefined) {
      // if the number is already in the map
      return array[i]
    } else {
      map[array[i]] = i
    }
  }
  return undefined
}
