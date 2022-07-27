// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguos segment of the bar selected such that:
// The length of the segment matches Ron's birth month and the sum of the integers on the segment is equal to his birth day.
// Determine how many ways she can divide the chocolate bar.
// Example:
// s = [2,2,1,3,2] <- an array of integers
// d = 4 <- the day of the month
// m = 2 <- the month

function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }
    if (sum === d) {
      count++;
    }
  }
  return count;
}
