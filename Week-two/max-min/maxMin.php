<?php

/* 
you will be given a list of integers arr and a single integer k
you must create an array of length k from elements of arr such that its unfairness is minimized.
call that array subarr. Unfairness of an array is calculated as

max(subarr) - min(subarr)

where: 
- max denotes the largest integer in subarr
- min denotes the smallest integer in subarr

Example:
arr = [1, 4, 7, 2]
k = 2
pick any two elements, test subarr = [4, 7]
unfairness = max(subarr) - min(subarr) = 7 - 4 = 3
After testing all combinations, the solution [1, 2] provides the minimum unfairness.

Note: Integers in arr may not be unique.

Function Description: 

Complete the maxMin function in the editor below. 
It must return an integer that denotes the minimum possible value of unfairness.
maxMin has the following parameter(s):
- k: an integer, the number of elements in the array to create
- arr: an array of integers .

It must return an integer that denotes the minimum possible value of unfairness.

the array could contain duplicate elements

*/


$arr = array(2,4,5,4,6,2,1,5);
$k = 3;

function maxMin($k, $arr) {
    // Write your code here
    $min = 0;
    $max = 0;
    $unfairness = 0;
    $minUnfairness = 0;
    $subArr = array();
    $arrLength = count($arr);
    $subArrLength = $k;
    $arr = array_unique($arr);
    $arr = array_values($arr);
    $arrLength = count($arr);
    $subArrLength = $k;
    $subArr = array_slice($arr, 0, $subArrLength);
    $min = min($subArr);
    $max = max($subArr);
    $minUnfairness = $max - $min;
    for ($i = 1; $i <= $arrLength - $subArrLength; $i++) {
        $subArr = array_slice($arr, $i, $subArrLength);
        $min = min($subArr);
        $max = max($subArr);
        $unfairness = $max - $min;
        if ($unfairness < $minUnfairness) {
            $minUnfairness = $unfairness;
        }
    }
    return $minUnfairness;
}





?>