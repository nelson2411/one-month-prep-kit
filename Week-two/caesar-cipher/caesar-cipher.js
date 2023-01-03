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
*/

let s = "All-I-Need-is-Love"
const k = 3

const caesarCipher = (s, k) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let encrypted = ""
  for (let i = 0; i < s.length; i++) {
    // we iterate through the string in order to get each letter
    let letter = s[i] // we get the letter
    if (alphabet.includes(letter)) {
      // we check if the letter is in the alphabet
      let index = alphabet.indexOf(letter) // we get the index of the letter in the alphabet
      let newIndex = (index + k) % 26 // we add the rotation factor to the index
      let newLetter = alphabet[newIndex] // we get the new letter from the alphabet
      if (letter === letter.toUpperCase()) {
        // if the letter is uppercase, we return the new letter in uppercase
        encrypted += newLetter.toUpperCase() // we add the new letter to the encrypted string
      } else {
        encrypted += newLetter // we add the new letter to the encrypted string
      }
    } else {
      encrypted += letter // we add the symbol to the encrypted string
    }
  }
  return encrypted
}
