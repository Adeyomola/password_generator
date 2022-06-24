const characters =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_+-=|{}[]:;?/><,.";
let store = "";
let password;
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
  for (i = 0; i <= passwordLength; i++) {
    let characterIndex = Math.floor(Math.random() * characters.length);
    let char = characters[characterIndex];
    store += char;
    password = store;
    if (password.length < passwordLength) {
      continue;
    }
    output.value = password;
    return (store = "");
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
