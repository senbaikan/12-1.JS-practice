// Get input element & max length
const inputString = document.getElementById("productname");
const maxLength = inputString.maxLength;
const firmMaxLength = document.getElementById("charcount");
const remainingLength = document.getElementById("remaining-chars");

// Append max length & remaininig length
firmMaxLength.append(maxLength);
remainingLength.append(maxLength);

// make function, counting remained character length
function countRemaininigLength(event) {
  const inputTextValue = inputString.value;
  //   let inputTextValue = event.target.value;
  const stringLength = inputTextValue.length; // length of input value
  //   console.log(stringLength);
  const newRemainigLength = maxLength - stringLength;
  // console.log(newRemainigLength);
  remainingLength.textContent = newRemainigLength;
}
inputString.addEventListener("input", countRemaininigLength);

function addWarningClass() {
  remainingLength.classList.add("warning");
  inputString.classList.add("warning");
}

function removeWarningClass() {
  remainingLength.classList.remove("warning");
  inputString.classList.remove("warning");
}

newRemainigLength = remainingLength.data;
remainingLength.addEventListener("newRemainigLength < 50", addWarningClass); // not working