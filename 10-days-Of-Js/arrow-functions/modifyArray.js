/*
Create an arrow function that takes an array of numbers and itirate over it 
and when it finds an even number multiply it by 2 and when it finds an odd
number multiply it by 3 and return the new array

*/

const array = [1, 2, 3, 4, 5]

// create an arrow function that takes an array as a parameter

const newFuntion = (array) => {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i] * 2)
    } else {
      newArray.push(array[i] * 3)
    }
  }
  return newArray
}

console.log(newFuntion(array))
