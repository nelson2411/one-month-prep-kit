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

function registerUser(user = "Anonymous") {
  return user + " is now registered"
}

console.log(registerUser("Brad"))

// Rest parameter

function sum(...args) {
  let total = 0

  for (const arg of args) {
    total += arg
  }
  return total
}
console.log(sum(1, 2, 3, 4, 5))

// Object as a parameter

function loginUser(user) {
  return `Welcome back, ${user.username}`
}

const user = {
  id: 1,
  username: "brad",
}

// Array as a parameter

function getRandomIndex(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)

  const item = arr[randomIndex]

  return item
}

getRandomIndex([1, 2, 3, 4, 5])

// Declaration vs Expression

// q: What is the difference between a function declaration and a function expression?
// a: A function declaration is a function
// that is defined in the main body of the code.
// While a function expression is a function that is
// defined inside an expression.

const adding = (a, b) => a + b

console.log(adding(1, 2))

const substracting = (a, b) => a - b

console.log(substracting(1, 2))
