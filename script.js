
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
// variable for UPPERCASE CONVERSION
letters2 = letters.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = writePassword();
    document.getElementById("password").placeholder = ps;
});

// Write password to the #password input
function writePassword() {
    // Asking for input
  enter = parseInt(prompt("How mane characters would you like for your password? between 8 and 128"));
  if (!enter) {
     alert("not VALID! put a value");
  } else if (enter < 8 || enter > 128) {
      // Verifying user input
      // Starts the prompt 
      enter = parseInt(prompt("You have to choose between 8 and 128"));
  } 

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);