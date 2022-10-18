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

const bills = {
  1000: 2,
  500: 3,
  200: 8,
  100: 2,
};

const operations = [1600, 800, 400, 800, 300, 1000, 600, 700, 100];

// the big O notation of this algorithm is O(n^2)
const withdraw = (amount) => {
  // get the total amount of money in the ATM
  const total = Object.keys(bills).reduce((total, bill) => {
    return total + bill * bills[bill];
  }, 0);
  // if the amount is greater than the total amount of money in the ATM
  if (amount > total) {
    // log that there are insufficient funds
    console.log("Insufficient funds");
    // return
    return;
  }
  // create a variable to store the result
  let result = {};
  // loop through the bills
  for (let bill in bills) {
    // if the amount is greater than the current bill
    if (amount >= bill) {
      // get the number of bills
      let numberOfBills = Math.floor(amount / bill);
      // if the number of bills is greater than the number of bills in the ATM
      if (numberOfBills > bills[bill]) {
        // assign the number of bills in the ATM to the number of bills
        numberOfBills = bills[bill];
      }
      // assign the number of bills to the result
      result[bill] = numberOfBills;
      // subtract the amount from the bill
      amount -= bill * numberOfBills;
    }
  }
  // log the result
  console.log(result);
};

// approach two
// Using meoization and recursion

const denominations = {
  1000: 2,
  500: 3,
  200: 8,
  100: 2,
};

const withdrawals = [1600, 800, 400, 800, 300, 1000, 600, 700, 100];

// the big O notation of this algorithm is O(n^2)
const atmTwo = (denominations, withdrawals) => {
  // Store the results of the function in a cache
  const cache = {};
  // Create a function that will be called recursively
  const withdraw = (amount, denominations) => {
    // Check if the amount is in the cache
    if (amount in cache) {
      // If it is, return the result from the cache
      return cache[amount];
    }
    // If the amount is 0, return an empty object
    if (amount === 0) {
      return {};
    }
    // If the amount is less than 0, return null
    if (amount < 0) {
      return null;
    }
    // Loop through the denominations
    for (let denomination in denominations) {
      // If there are no bills left, continue to the next denomination
      if (denominations[denomination] === 0) {
        continue;
      }
      // Subtract one bill from the denomination
      denominations[denomination]--;
      // Recursively call the withdraw function
      const result = withdraw(amount - denomination, denominations);
      // Add one bill back to the denomination
      denominations[denomination]++;
      // If the result is not null, return the result
      if (result !== null) {
        // If the denomination is not in the result, add it
        if (!(denomination in result)) {
          result[denomination] = 0;
        }
        // Add one bill to the result
        result[denomination]++;
        // Add the result to the cache
        cache[amount] = result;
        // Return the result
        return result;
      }
    }
    // If the result is null, add the amount to the cache
    cache[amount] = null;
    // Return null
    return null;
  };
  // Loop through the withdrawals
  for (let i = 0; i < withdrawals.length; i++) {
    // Call the withdraw function
    const result = withdraw(withdrawals[i], denominations);
    // If the result is null, log that there are insufficient funds
    if (result === null) {
      console.log("Insufficient funds");
    } else {
      // Log the result
      console.log(result);
    }
  }
};
