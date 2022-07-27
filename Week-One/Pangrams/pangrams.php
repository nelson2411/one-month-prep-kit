<?php
// Given a sentence determine whether it is a pangram. A pangram is a sentence that contains every letter of the alphabet at least once.
// Return either pangram or not pangram as apropriate.

// The function must return the string panagram if the input string is a pangram. 
// Otherwise, return not panagram.


function pangrams($string) {
    $string = strtolower($string); // Convert the string to lowercase.
    $string = preg_replace('/[^a-z]/', '', $string); // Remove all non-alphabetical characters.
    $string = str_split($string); // Split the string into an array.
    $string = array_unique($string); // Remove all duplicate characters.
    $string = array_values($string); // Reindex the array.
    if(count($string) == 26){ // If the array contains 26 unique characters, then the string is a pangram.
        return 'pangram';
    }
    else{
        return 'not pangram';
    }
}

?>