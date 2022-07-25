// There are two n element arrays of integers, A and B.
// Permute them into some A' and B' such that the relation
// A'[i] + B'[i] >=k holds for all i where 0 <= i < n.
// k is a positive integer.
// A = array of n integers.
// B = array of n integers.

function twoArrays(k, A, B) {
  let sortA = A.sort((a, b) => a - b); // We sort the array A));
  let sortB = B.sort((a, b) => b - a); // We sort the array B));
  for (let i in sortA) {
    // We iterate over the array A
    if (sortA[i] + sortB[i] < k) {
      // If the sum of the current element of A and B is less than k
      return "YES";
    }
  }
  return "NO";
}
