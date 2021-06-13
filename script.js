
// Assignment code here
var enter; 
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

number = [0,1,2,3,4,5,6,7,8,9];
characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// for the Uppercase conversion !!!!!
space = [];
// Choices declared after if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase
var toUpper = function (x) {
    return x.toUpperCase();
};
letters2 = letters.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.prompt("How many characters would you like to have on your password? Between 8 and 128")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);