// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "!@#$%&*+,?"

function generatePassword() {
    var password = "";
    var passwordChars = "";

    console.log("button clicked")
    
// User Prompts
var passwordLengthUser = prompt( "How many characters should the password be?")
passwordLengthUser = parseInt(passwordLengthUser);

if (passwordLengthUser < 8){
    alert("password must have more than 7 characters");
    return "";
}
if (passwordLengthUser >128) {
    alert("Password must have less than 128 characters");
    return "";
}
var lowercaseCharactersChoice = confirm("Do you want to include lowercase letters?");

if (lowercaseCharactersChoice) {
    passwordChars += lowercaseChars;
}
var uppercaseCharsChoice = confirm("Do you want to include uppercase letters?");

if (uppercaseCharsChoice) {
    passwordChars += uppercaseChars;
}   
 var numbersChoice = confirm("Would you like to add numbers to your password?");

 if (numbersChoice) {
     passwordChars += numbers;
 }

 var specialCharsChoice = confirm("Do you also need special characters?");

 if (specialCharsChoice) {
    passwordChars += specialChars;
 }
 var randomPassword = "";
 for (var i = 0; i < passwordLengthUser; i++) {
    password += passwordChars[Math.floor(Math.random() * passwordChars.length)];
    console.log("Random Password")
 
 }
return randomPassword;
 
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);