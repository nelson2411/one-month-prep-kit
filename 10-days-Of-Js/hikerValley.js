let seaLevel = 0
let valleys = 0
let inValley = 0

// Define the path

let steps = 8
let path = "DDUUUUDD"

// Loop through the path

for (let i = 0; i < steps; i++) {
  // if the path is a D, subtract 1 from the sea level

  if (path[i] === "D") {
    seaLevel--
  }

  // if the path is a U, add 1 to the sea level
  else if (path[i] === "U") {
    seaLevel++
  }
  if (seaLevel < 0) {
    inValley = 1
  }
}

// If the hiker was in a valley at some point, add 1 to the valleys variable

if (inValley > 0) {
  valleys++
}

console.log(valleys)
