var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
const passwordText = document.getElementById("password");
const length = document.getElementById("length");
const includeNumbers = document.getElementsById("numbers");
const includeSymbols = document.getElementById("symbols");
//const generateBtn = document.getElementById("generate");

function generatePassword() {
    var chars = "abcdefghijflmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var symbols = "!@#$%&*<?";
    var passwordLength = 8;
    var password = "";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
let characters = chars;
includeNumbers.checked ? (characters += numbers) : "";
includeSymbols.checked ? (characters += symbols) : "";
passwordText.value = generatePassword(length.value,characters);
}
const generatePassword = (length,characters) => {
    let password = "";
    for (let i = 0; i <length; i++) {
        password += characters.charAt(
            math.floor(math.random() * characters.length)
        );
    }
    return password;
};