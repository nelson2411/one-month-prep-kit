// Build the logic of an ATM machine
// The ATM should operate under the given rules:
// - The bills used for a withdrawal is removed from the ATM
// - The ATM should always return the smallest amount of bills possible
//   Example: a withdrawal of 500 should return 1 x 500 bill rather than 5 x 100 bills if possible
// - The ATM can't give out more money than it contains
// - The ATM can't give out amounts that the remaining bills doesn't add up to

// The assignment
// The ATM start with a predetermined amount of each bill:
// - 2x1000
// - 3x500
// - 8x200
// - 2x100

// You will make seven withdrawals the specified order.
// Note that based on the rules listed earlier some of the withdrawals
// should be declined by the ATM:
// 1. 1600
// 2. 800
// 3. 400
// 4. 800
// 5: 300
// 5. 1000
// 6. 600
// 7. 700
// 7. 100

/* When all of these withdrawals are completed the ATM is expected 
to be completely empty of bills and will not have given out more money 
than it contained at the start. Try to write a general solution that 
will also work with different amounts of bills, different types of bills 
and different withdrawal amounts than in the example give.
*/
// approach two
// Using meoization and recursion

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

//Check if the ATM has enough money to give out
const checkATM = (withdrawal) => {
  if (withdrawal > totalAmount) {
    return false;
  } else {
    return true;
  }
};

const ATM = (withdrawals) => {
  let billsRemainingInATM = denominations;
  // Check if the ATM has enough money to give out
  if (checkATM(withdrawals)) {
    //Loop through the withdrawals
    for (let i = 0; i < withdrawals.length; i++) {
      let withdrawal = withdrawals[i];
      let bills = [];
      // billsRemainingInATM should be an object
      // Key is the number of bills
      // Value is the denomination
      let billsRemainingInATM = denominations;
      //Loop through the bills
      for (let j = 0; j < billsRemainingInATM.length; j++) {}
    }
  }
};
