const characters = "~`!@#$%^&*()_+-=|{}[]:;?/><,.";
const numbers = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let store = "";
let password = "";
let output = document.querySelector("#output");
let button = document.querySelector("button");
let clear = document.getElementById("clear");
let copy = document.getElementById("copy");

button.addEventListener("click", generatePassword);

function generatePassword() {
  let passwordLength = document.getElementById("input").value;
  if (passwordLength == "" || passwordLength == 0) {
    return;
  }
  for (i = 0; i < passwordLength; i++) {
    let operations = [
      characters[Math.floor(Math.random() * characters.length)],
      numbers[Math.floor(Math.random() * numbers.length)],
      lowerCase[Math.floor(Math.random() * lowerCase.length)],
      upperCase[Math.floor(Math.random() * upperCase.length)],
    ];
    store += operations[Math.floor(Math.random() * operations.length)];
    password = store.slice(store.length - passwordLength);
    output.value = password;
  }
}

clear.addEventListener("click", () => {
  store = "";
  password = "";
  output.value = "";
  document.getElementById("input").value = "";
});

copy.addEventListener("click", () => {
  let copyText = output;
  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
  alert("Copied!");
});
