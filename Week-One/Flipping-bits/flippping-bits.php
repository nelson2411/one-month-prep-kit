<?php

// You will be given a list of 32 bit unsigned integers. 
// Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.

function flippingBits($n) {
  // We use the bitwise XOR operator to flip all the bits.
    return ~$n & 0xFFFFFFFF; // ~$n is the bitwise NOT operator, and 0xFFFFFFFF is the 32-bit mask.
}




?>