var lowers = "abcdefghijklmnopqrstuvwxyz"
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numerics = "0123456789"
var special = "!@#$%^&*()"
var passChars = "";
var output = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   
    //Prompts the user for desired password length, provides validation if a usable response is given and an error message if not
    var passLength = window.prompt("Enter a desired password length between 8-128 characters");
    if (!passLength) {
        return;
    } else if (
        (passLength > 128)
      ) {
        window.alert("Password cannot exceed 128 characters");
    } else if (
        (passLength < 8)
      ) {
        window.alert("Password cannot be less than 8 characters");
    } else {
        window.alert("Password length of " + passLength + " selected")
    }
  
    //Asks the user whether they'd like to include lowercases
    var passLower = window.confirm("Would you like to include lowercase letters?")
    if (!passLower) {
      window.alert("Lowercase letters will not be included");
    } else {
      window.alert("Lowercase letters will be included")
      passChars += lowers
    }
  
    //Asks the user whether they'd like to include uppercasess
    var passUpper = window.confirm("Would you like to include uppercase letters?")
    if (!passUpper) {
      window.alert("Uppercase letters will not be included");
    } else {
      window.alert("Uppercase letters will be included")
      passChars += uppers
    }
  
    //Asks the user whether they'd like to include numericss
    var passNum = window.confirm("Would you like to include numerics?")
    if (!passNum) {
      window.alert("Numerics will not be included");
    } else {
      window.alert("Numerics will be included")
      passChars += numerics
    }
    
    //Asks the user whether they'd like to include special characters
    var passSpec = window.confirm("Would you like to include special characters?")
    if (!passSpec) {
      window.alert("Special characters will not be included");
    } else {
      window.alert("Special characters will be included")
      passChars += special
    }
  
    //Generates random combination from selected character types
    for (var i = 0; i < passLength; i++) {
      output += passChars.charAt(Math.floor(Math.random() * passChars.length));
    }
  
    //Posts the result to the 'Your Secure Password' Field
    var passwordText = document.querySelector("#password");
    passwordText.value = output;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);