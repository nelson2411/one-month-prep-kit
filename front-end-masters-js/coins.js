// Write a function, makeChange, that returns an integer that represents
// the least number of coins that add up to an amount where the amount
//is always divisible by 5.

// coin values are 5, 10, 25

// input: 40, output: 3 (25 + 10 + 5)
// input: 35, output: 2 (25 + 10)

const makeChange = (amount) => {
  let coins = 0;
  const coinValues = [25, 10, 5];
  for (let i = 0; i < coinValues.length; i++) {
    while (amount >= coinValues[i]) {
      amount -= coinValues[i];
      coins++;
    }
  }
  return coins;
};

// Using brute force solucion

const coinValues = [1, 6, 10];
const amount = 12;

const makeChangeTwo = (amount) => {
  if (amount === 0) {
    // base case
    return 0;
  }
  let minCoins; // variable to store the minimum number of coins
  coinValues.forEach((coin) => {
    // loop through the coin values
    if (amount - coin >= 0) {
      // check if the amount is greater than the coin value
      let currMinCoins = makeChangeTwo(amount - coin); // recursive call
      if (minCoins === undefined || currMinCoins < minCoins) {
        // check if the current minCoins is undefined or if the current minCoins is less than the minCoins
        minCoins = currMinCoins; // assign the current minCoins to minCoins
      }
    }
  });
  return minCoins + 1; // assign the minCoins + 1 to minCoins
};
