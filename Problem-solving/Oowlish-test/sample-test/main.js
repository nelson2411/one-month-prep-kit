// When arrow left is clicked the numbers must shift to the left
// When arrow right is clicked the numbers must shift to the right

const buttons = document.getElementsByTagName("button");
const boxes = document.getElementsByClassName("box");

const arr = Array.prototype.map.call(boxes, (box) => {
  return box.innerHTML;
});

buttons[0].onclick = () => {
  arr.push(arr.shift());
  Array.prototype.forEach.call(boxes, (box, index) => {
    box.innerHTML = arr[index];
  });
};

buttons[1].onclick = () => {
  arr.unshift(arr.pop());
  Array.prototype.forEach.call(boxes, (box, index) => {
    box.innerHTML = arr[index];
  });
};
