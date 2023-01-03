<?php
/* Julius Caesar protected his confidential information by encrypting it 
using a cipher. Caesar's cipher shifts each letter by a number of letters. 
If the shift takes you past the end of the alphabet, just rotate back 
to the front of the alphabet. In the case of a rotation by 3, w, x, y 
and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

Example: 
The given cleartext is "All-I-need-is-love", the alphabet is rotated by 3 positions,
so the encrypted text is "Doo-L-lhgh-lv-lqyhub".

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Function Description

caesarCipher has the following parameter(s):

string s: cleartext
int k: the alphabet rotation factor
Returns

string: the encrypted string

in PHP this .= is the same as $encrypted = $encrypted . $alphabet[$newCharPosition];
*/

$s = "All-I-need-is-love";
$k = 3;

function caesarCipher($s,$k){
    $alphabet = "abcdefghijklmnopqrstuvwxyz";
    $alphabetLength = strlen($alphabet); // we can use this instead of 26, strln is a built in function that returns the length of a string
    $sLength = strlen($s);
    $encrypted = "";
    for ($i = 0; $i < $sLength; $i++) {
        $char = $s[$i];
        $charPosition = strpos($alphabet, $char); // strpos is a built in function that returns the position of a character in a string
        if ($charPosition !== false) { // if the character is in the alphabet (not a symbol) then encrypt it
            $newCharPosition = $charPosition + $k;
            if ($newCharPosition >= $alphabetLength) {
                $newCharPosition = $newCharPosition - $alphabetLength;
            }
            $encrypted .= $alphabet[$newCharPosition];
        } else {
            $encrypted .= $char; // if the character is not in the alphabet (a symbol) then leave it as it is
        }
    }
    return $encrypted;
}



?>