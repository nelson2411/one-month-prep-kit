<?php 
// Given a square matrix , calculate the absolute difference between the sums
// of its diagonals. 
// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9

function diagonalDifference($arr){
    $sum1 = 0; // Initialize the sum of the first diagonal.
    $sum2 = 0; // Initialize the sum of the second diagonal.
    $n = count($arr); // Get the number of rows and columns in the matrix.
    for($i = 0; $i < $n; $i++){
        $sum1 += $arr[$i][$i]; // Add the value of the current element to the sum of the first diagonal.
        $sum2 += $arr[$i][$n - $i - 1]; // Add the value of the current element to the sum of the second diagonal.
    }
    return abs($sum1 - $sum2); // Return the absolute difference between the sums of the diagonals.

}



?>