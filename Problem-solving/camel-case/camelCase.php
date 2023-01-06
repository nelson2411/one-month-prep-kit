<?php
/* 
There is a secuence of words in CamelCase as a strings of letters, s, 
having the following properties:

* It is a concatenation of one or more words consisting of English letters.
* All letters in the first word are lowercase.
* For each of the subsequent words, the first letter is uppercase and rest of the 
letters are lowercase.

Given s, determine the number of words in s.

Example:
s = oneTwoThree
There are 3 words in the string.

Create a function camelCase that takes in a string s and returns the number of words in s.


*/


$s = "oneTwoThree";

function camelCase($s){
   $words = 1;
    for($i = 0; $i < strlen($s); $i++){
        if(ctype_upper($s[$i])){
          $words++;
        }
    }
    return $words;
}



?>