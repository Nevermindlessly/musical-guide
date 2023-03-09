//Stand-in function to run the script upon opening the page
var bing = function() {
   
  //Prompts the user for desired password length
  var passLength = window.prompt("Enter a desired password length between 8-128 characters");

  //Validates the user's selection if valid, provides error message if not
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

  var passLower = window.prompt("Would you like to include lowercase letters?")

  var passUpper = window.prompt("Would you like to include uppercase letters?")

  var passNum = window.prompt("Would you like to include numerics?")

  var passSpec = window.prompt("Would you like to include special characters?")

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

bing()