// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array
// example:
// $a = [2,6]; $b = [24 ,36];
// There are two numbers 6 and 12.

function getTotalX(a, b){
  let int = 0
  for(let k = a.length -1; k <= b[0]; k++ ){
    let count1 = 0
    let count2 = 0
    for(let i = 0; i < a.length; i++){
      if(k % a[i] === 0){
        count1++
      }
    }
    for(let j = 0; j < b.length; j++){
      if(b[j] % k === 0){
        count2++
      }
    }
    if(count1 === a.length && count2 === b.length){
      int++
    }
  }
  return int
}