// Find the values of s1 and s2 by plugging the area and perimeter values
// into the formula
// Create an array consisting of s1 and s2 and sorts it in ascending order
// Returns the sorted array

function sides(literals, ...expressions) {
  // ...expressions is the rest operator
  let A = expressions[0]; //
  let P = expressions[1];
  var answers = [];
  var s1 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
  var s2 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;

  answers.push(s1);
  answers.push(s2);

  return answers.sort();
}
