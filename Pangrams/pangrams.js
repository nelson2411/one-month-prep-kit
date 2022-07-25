// Given a sentence determine whether it is a pangram. A pangram is a sentence that contains every letter of the alphabet at least once.
// Return either pangram or not pangram as apropriate.

// The function must return the string panagram if the input string is a pangram.
// Otherwise, return not panagram.

function pangrams(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"; // We create a string with all the letters of the alphabet
  let alphabetArray = alphabet.split("");
  let stringArray = string.toLowerCase().split(""); // We convert the string to lowercase and split it into an array

  let result = "";
  for (let i = 0; i < alphabetArray.length; i++) {
    if (stringArray.includes(alphabetArray[i])) {
      result += alphabetArray[i];
    }
  }
  if (result.length === 26) {
    return "pangram";
  } else {
    return "not pangram";
  }
}
