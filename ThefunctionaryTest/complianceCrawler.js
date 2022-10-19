/*
Compliance Crawler

A compliance crawler utility is used to search out for compliance issues
in the file system of any computer starting from the root directory.

A logger logs every time a move operation is performed by the utility.
The operations that the utility can perform are given below:

1. "../" move to the parent folder of the current folder
2. "./" stay in the same folder
3. "x/" move to the child folder named "x" of the current folder




*/
// Logged moves is an array of strings that represent the moves that the
// utility has performed
const loggedMoves = ["x/", "../", "y/", "./", "z/"];

const minimumSteps = (loggedMoves) => {
  // check the length of the loggedMoves array
  const length = loggedMoves.length;
  // if the length is 0, return 0
  if (length === 0) {
    return 0;
  } else {
    // create a variable to store the number of steps
    let steps = 0;
    // create a variable to store the current directory
    let currentDirectory = ""; // root directory
    // loop through the loggedMoves array
    for (let i = 0; i < length; i++) {
      // if the current move is "../", decrement the steps by 1
      if (loggedMoves[i] === "../") {
        steps--;
      } else if (loggedMoves[i] === "./") {
        // if the current move is "./", do nothing
        continue;
      } else {
        // if the current move is "x/", increment the steps by 1
        steps++;
        // set the current directory to the current move
        currentDirectory = loggedMoves[i];
      }
    }
    // return the steps
    return steps;
  }
};
