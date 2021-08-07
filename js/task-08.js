const input = document.querySelector("input");
const createBtn = document.querySelector('[data-action="render"]');
const clearBtn = document.querySelector('[data-action="destroy"]');
const box = document.querySelector("#boxes");
createBtn.addEventListener("click", onCreateDiv);
clearBtn.addEventListener("click", onClearBoxes);

function onCreateDiv() {
  createBoxes(input.value);
}
function onClearBoxes() {
  input.value = "";
  box.innerHTML = "";
}
function createBoxes(amount) {
  const allDiv = [];

  for (let i = 0; i < amount; i++) {
    const createBox = document.createElement("div");
    createBox.style.width = `${i * 10 + 30}px`;
    createBox.style.height = `${i * 10 + 30}px`;
    createBox.style.backgroundColor = `rgb(${getRandom(0, 255)},${getRandom(
      0,
      255
    )},${getRandom(0, 255)})`;
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
    allDiv.push(createBox);
  }
  box.append(...allDiv);
};
