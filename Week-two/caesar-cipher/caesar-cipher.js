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

let s = "All-I-need-is-love";
const k = 3;

const caesarCipher = (s, k) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"; //abcdefghijklmnopqrstuvwxyz
  let UpperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //ABCDEFGHIJKLMNOPQRSTUVWXYZ
  let encrypted = "";
  // hyphen is not encrypted

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "-") {
      encrypted += "-";
    } else if (s[i] === s[i].toUpperCase()) {
      //
      // if the letter is uppercase
      let index = UpperCaseAlphabet.indexOf(s[i]);
      let newIndex = (index + k) % 26;
      encrypted += UpperCaseAlphabet[newIndex];
    } else {
      // if the letter is lowercase
      let index = alphabet.indexOf(s[i]);
      let newIndex = (index + k) % 26;
      encrypted += alphabet[newIndex];
    }
  }
  return encrypted;
};
