// We must create a function that moves all numbers around 5 clockwise direction
const btnIds = [1, 2, 3, 4, 6, 7, 8, 9];
const values = [1, 2, 3, 4, 6, 7, 8, 9];

const button5 = document.getElementById("btn5");
button5.onclick = function () {
  values.unshift(values.pop()); //
  for (let i = 0; i < btnIds.length; i++) {
    document.getElementById("btn" + btnIds[i]).innerHTML = values[i];
  }
};
