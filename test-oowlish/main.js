const itemText = document.getElementsByTagName("textarea");

const addItem = (itemText) => {
  // TODO: implement
};

const addItemFromInput = () => {
  // TODO: implement
};

addEventListener("load", () => {
  addItem("Read the description");
  addItem("Solve the task");
  addItem("Submit the solution");

  document.querySelector(".todo__input").addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addItemFromInput();
    }
  });

  document
    .querySelector(".todo__create")
    .addEventListener("click", () => addItemFromInput());
});
