/*

 Build the logic of an ATM machine
 The ATM should operate under the given rules:
- The bills used for a withdrawal is removed from the ATM
- The ATM should always return the smallest amount of bills possible
  Example: a withdrawal of 500 should return 1 x 500 bill rather than 5 x 100 bills if possible
- The ATM can't give out more money than it contains
- The ATM can't give out amounts that the remaining bills doesn't add up to

The assignment
The ATM start with a predetermined amount of each bill:
- 2x1000
- 3x500
- 8x200
- 2x100

You will make seven withdrawals the specified order.
Note that based on the rules listed earlier some of the withdrawals
should be declined by the ATM:
1. 1600
2. 800
3. 400
4. 800
5: 300
5. 1000
6. 600
7. 700
7. 100

 When all of these withdrawals are completed the ATM is expected 
to be completely empty of bills and will not have given out more money 
than it contained at the start. Try to write a general solution that 
will also work with different amounts of bills, different types of bills 
and different withdrawal amounts than in the example give.

// approach two
// Using meoization and recursion
*/

let denominations = {
  2: 1000,
  3: 500,
  8: 200,
  2: 100,
};

const withdrawals = [1600, 800, 400, 800, 300, 1000, 600, 700, 100];

//Sum the total amount of money in the ATM
const totalAmount = Object.keys(denominations).reduce((acc, key) => {
  return acc + denominations[key] * key;
}, 0);
console.log(totalAmount);

/* Possible solution written in pseudocode
1. Check if the ATM has enough money to give out
2. check the first withdrawal in the array and see if it can be given out
3. if it can be given out, check the smallest amount of bills possible
4. Store the bills used for a withdrawal in an object,
where the key is the bill and the value is the amount of bills used.
5. Remove the bills used for a withdrawal from the ATM.
6. Check the next withdrawal in the array and see if it can be given out
7. if it can be given out, check the smallest amount of bills possible
8. Store the bills used for a withdrawal in an object,
where the key is the bill and the value is the amount of bills used.
9. Remove the bills used for a withdrawal from the ATM.
10. Repeat steps 6-9 until all withdrawals are completed
11. Function should return an object with the bills used for each withdrawal

in pseudocode: 

function atm(withdrawals: array, denominations: object) {
  for let i = 0; i < withdrawals.length; i++ {
    if withdrawals[i] > totalAmount {
      return "ATM does not have enough money to give out"
    } else {
      let bills = denomitanions;
      for let j = 0; j < Object.values(bills).length; j++ {
        if withdrawals[i] % Object.values(bills)[j] === 0 {
          let amountOfBills = withdrawals[i] / Object.values(bills)[j];
          let bill = Object.values(bills)[j];
          let billsUsed = {bill: amountOfBills};
          let newBills = Object.values(bills).splice(j, 1);
          let newDenominations = {newBills};
          return billsUsed;
        }
      }

    }
    
  }
}


*/
