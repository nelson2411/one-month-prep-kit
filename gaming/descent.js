/*
* The while loop represents the end
* Each itiration represents a turn in the game
* where you are given inputs (The heights of the mountains)
* and where you have to print an output (The index of the mountain to fire on)
* The inputs you are given are automatically updated according to your last actions.

inside the while loop, you must write the logic to print to the standard output the index 
of the mountain to shoot according to this rule:
* shoot the highest mountain
* if you can't reach the highest mountain, shoot the one to the right of it
* if you can't reach the right mountain, shoot the one to the left of it
* if you can't reach any mountain, don't shoot


*/

// game loop

while (true) {
  var max = 0
  var index = 0
  for (var i = 0; i < 8; i++) {
    var mountainH = parseInt(readline()) // represents the height of one mountain.
    if (mountainH > max) {
      max = mountainH
      index = i
    }
  }
  console.log(index) // The index of the mountain to fire on.
}
