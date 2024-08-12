// define a global variable
let value = 0;
let incrementalValue;
const count = document.getElementById("count");
const numberInput = document.querySelector('input[type="number"]');

// increment

function increment() {
  value = parseInt(value) + parseInt(incrementalValue);
  count.innerText = value;
}

function customIncrement() {
  incrementalValue = numberInput.value;
}
