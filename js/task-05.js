const input = document.querySelector("#name-input");
const inputName = document.querySelector("#name-output");
input.addEventListener("input", onInputFocus);
function onInputFocus(event) {
  input.value === ""
    ? (inputName.textContent = "незнакомец")
    : (inputName.textContent = event.currentTarget.value);
};
