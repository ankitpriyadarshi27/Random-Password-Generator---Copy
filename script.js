const passwordBox = document.getElementById("password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("upperCase.length");
const lowerCase =  "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{};:,./?<>|\\~`";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];

    while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}


async function copyTextToClipboard() {
  try {
    await navigator.clipboard.writeText(text);
    alert("Text copied successfully!");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};
