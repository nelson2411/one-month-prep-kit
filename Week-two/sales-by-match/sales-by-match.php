<?php

// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.

// For example, there are n=7 socks with colors ar=[1,2,1,2,1,3,2].
// There is one pair of color 1 and one of color 2.
// There are three odd socks left, one of each color.
// The number of pairs is 2.

// Solving the problem with pseudo code
// 1. Create a variable to store the number of pairs
// 2. Create a variable to store the sorted array
// 3. Sort the array in ascending order
// 4. Loop through the array
// 5. If the current element is equal to the next element
// 6. Increment the pairs variable by 1
// 7. Increment the index by 1
// 8. Return the pairs variable

$ar = [1,2,1,2,1,3,2];
$n = count($ar); // determine the number of elements in the array

function sockMerchant($n, $ar) {
    $pairs = 0; // variable to store the number of pairs
    sort($ar); // sort the array in ascending order, this is great in php
    for($i = 0; $i < $n; $i++){ // loop through the array
        if($ar[$i] == $ar[$i + 1]){
            $pairs++;
            $i++;
        }
    }
    return $pairs;
}



?>