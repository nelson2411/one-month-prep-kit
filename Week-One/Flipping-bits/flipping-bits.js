// You will be given a list of 32 bit unsigned integers.
// Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.

function flippingBits(n) {
  // We used the Unsigned right shift
  return ~n >>> 0; // >>> 0 converts to unsigned
}
