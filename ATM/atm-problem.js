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

// You will make seven withdrawals the specified order. Note that based on the rules listed earlier some of the withdrawals should be declined by the ATM:
// 1. 1600
// 2. 800
// 3. 400
// 4. 800
// 5: 300
// 5. 1000
// 6. 600
// 7. 700
// 7. 100

// When all of these withdrawals are completed the ATM is expected to be completely empty of bills and will not have given out more money than it contained at the start. Try to write a general solution that will also work with different amounts of bills, different types of bills and different withdrawal amounts than in the example give.

// approach two
// Using meoization and recursion

let denominations = {
  1000: 2,
  500: 3,
  200: 8,
  100: 2,
};

const withdrawals = [1600, 800, 400, 800, 300, 1000, 600, 700, 100];

class ATM {
  constructor(denominations, withdrawals) {
    this.denominations = {
      1000: 2,
      500: 3,
      200: 8,
      100: 2,
    };
    this.withdrawals = [1600, 800, 400, 800, 300, 1000, 600, 700, 100];
  }

  makeChange(amount) {
    if (amount === 0) {
      return [];
    }
    if (amount < 0) {
      return null;
    }
    let minBills;
    for (let bill in this.denominations) {
      if (this.denominations[bill] > 0) {
        this.denominations[bill]--;
        let currMinBills = this.makeChange(amount - bill);
        this.denominations[bill]++;
        if (currMinBills !== null) {
          currMinBills = [...currMinBills, bill];
          if (!minBills || currMinBills.length < minBills.length) {
            minBills = currMinBills;
          }
        }
      }
    }
    return minBills;
  }

  withdraw() {
    this.withdrawals.forEach((amount) => {
      let bills = this.makeChange(amount);
      if (bills) {
        console.log(`Dispensing ${bills.join(" + ")} for $${amount}`);
      } else {
        console.log(`Insufficient funds for $${amount}`);
      }
    });
  }
}
