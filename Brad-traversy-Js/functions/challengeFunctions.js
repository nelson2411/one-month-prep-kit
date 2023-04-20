/* 
Challenge #1 
Create a function that takes a temperature in Fahrenheit and converts it to Celsius.
put the output in a string by adding `\xB0` to the end of the result.

*/

const getCelsius = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * (5 / 9)
  return Math.round(celsius)
}

console.log(`the temperature is ${getCelsius(32)}\xB0C`)
console.log(`the temperature is ${getCelsius(68)}\xB0C`)

/* 
Challenge #2
Create a function that takes an array of numbers and returns an object 
containing the min and max values of the array.

for example:
[1, 2, 3, 4, 5] => {min: 1, max: 5}
Use Math.min and Math.max to find the min and max values.

*/

const minMax = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  return { min, max }
}

/* 
Challenge #3
Create an IIFE that takes in the length and width of a rectangle and 
outputs it to the console in a message as soon as the page loads.

The message should be: 
The area of a rectangle with a length of 10 and a width of 5 is 50.


*/

;((length, width) => {
  const area = length * width
  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`
  console.log(output)
})(10, 5)
