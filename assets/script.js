// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables with all possible characters
var allLowercase = "qwertyuiopasdfghjklzxcvbnm";
var allUppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var allNumbers = "0123456789";
var allSpecial = "!\u0022#$%&\u0027()*+,-./:;<=>?@[]^_`{|}~";
// Empty variables to be filled in during the generatePassword function
var newPassword = "";
var allCharacters = "";

function generatePassword() {
  // Generates confirm and prompt alerts asking the user for password criteria
  var confirmLowercase = confirm("Would you like your password to include lowercase letters?");
  // Adds the corresponding character type to the variable allCharacters if confirmed
  if (confirmLowercase) {
    allCharacters += allLowercase;
  }
  var confirmUppercase = confirm("Would you like your password to include uppercase letters?");
  if (confirmUppercase) {
    allCharacters += allUppercase;
  }
  var confirmNumbers = confirm("Would you like your password to include numbers?");
  if (confirmNumbers) {
    allCharacters += allNumbers;
  }
  var confirmSpecial = confirm("Would you like your password to include special characters?");
  if (confirmSpecial) {
    allCharacters += allSpecial;
  }

  var passLength = prompt("Choose a password length between 8 and 128");
  // Checks if the user chose a valid number and throws up an alert if not
  if (passLength < 8 || passLength > 128) {
    alert("Password must be between 8 characters and 128 characters");
  }

  if (confirmLowercase == false && confirmUppercase == false && confirmNumbers == false && confirmSpecial == false) {
    alert("Must choose at least one character type!")
  }

  
  // Loops until the correct length chosen in passLength has been reached; cntinues randomly selecting characters until the password has reached the desired length
  for (var i = 0; i <= passLength; i++) {
    var randomNumber = Math.floor(Math.random() * allCharacters.length);
    // Selects a single character from the allCharacters variable using the random number generated above and assigns it to the variable newPassword
    newPassword += allCharacters.substring(randomNumber, randomNumber + 1);
  }
  console.log(newPassword);
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);