// Assignment code here
window.alert("")
// Get references to the #generate element
var button = document.querySelector("#generate");
var password = document.querySelector("#password");

// Write password to the #password input
let characters = "0123456789ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz!@#$%^&*()_-+={}[]<>?";
let passwordLenght = 10;
let passwordValue = ""

const createPassowrd = () => {
    passwordValue = "";

    for(let i = 0; i < passwordLenght; i++) {
        let number = Math.floor(Math.random() * characters.length);
        passwordValue += characters.substring(number,number + 1);
    }

    password.value = passwordValue;
}

// Add event listener to generate button
button.addEventListener("click", createPassowrd);
