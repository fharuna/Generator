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
var passwordLength = prompt( "How many characters should the password be?")
passwordLength = parseInt(passwordLength);

if (passwordLength < 8){
    alert("password must have more than 7 characters");
    return "";
}
if (passwordLength >128) {
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
 var password = "";
 for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * passwordChars.length);
    password += passwordChars[random]
    
 }
 console.log(password)
 
 return password;
 
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);