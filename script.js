
// Assignment code here
var enter; 
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

number = [1,2,3,4,5,6,7,8,9];
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
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

var get = document.querySelector("#generate");

get.addEventListener("click", function() {
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
  
    } else {
      /// When user input is confirmmed and approved 
      confirmNumber = confirm("You want numbers in your password?");
      confirmCharacter = confirm("You want special characters?");
      confirmUppercase = confirm("You need Uppercase letters?");
      confirmLowercase = confirm("You ned Lowercase letters?");

    };
  /// If 4 negative options
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You need to choose at least ONE ! ");
  }
  ///Else if for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
      choices = character.concat(number, letters, letters2);
  }
  //Else if for 3 positive options 
  else if (confirmCharacter && confirmNumber && confirmUppercase ) {
      choices = character.concat(number, letters2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, letters);
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(letters, letters2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(letters, letters2);
  }

  // Else if for 2 positibe options 
else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(letters);

} else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(letters2);
}
else if (confirmLowercase && confirmNumber) {
    choices = letters.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    choices = letters.concat(letters2);

} else if (confirmNumber && confirmUppercase) {
    choices = number.concat(letters2);
}
// Else if for 1 postive option
else if (confirmCharacter) {
    choices = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    choices = letters;
}
// Created space var to fill uppercase conversion
else if (confirmUppercase) {
    choices = space.concat(letters2)
}

// password variable is an array placeholder for user generated amount of lenght
var password = [];

// start random selective variables:
// random selection for all variables:
for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}
/// This joins the password array and converts it to a string 
var ps = password.join('')
UserInput(ps);
return ps;
}

/// This puts the password value into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}


