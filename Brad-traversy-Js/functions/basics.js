// Create a basic function with no parameters

/* 
q: What is a function?
a: A function is a block of code designed to 
perform a particular task.
q: what a pure function is?
a: A pure function is a function that returns the 
same result if given the same arguments 
(it is also referred as deterministic).

q: difference between a parameter and an argument?
a: A parameter is the variable listed as a part of the 
function definition.
An argument is the actual value of this variable that 
gets
*/

const sayHello = function () {
  console.log("Hello")
}

// Create an example of a pure function

const add = function (a, b) {
  return a + b
}

// The previous function is pure because the same input
//always gives the same output.

function add(num1, num2) {
  return num1 + num2
}
