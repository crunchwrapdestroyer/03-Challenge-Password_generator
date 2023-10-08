// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var spccharctrs = ['!', '@', '#', '$', '%', '^', '&','*']
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add function: when user clicks "generate password" button,
// then page displays a series of prompts to choose from: 
function generatePassword() {
  var userInput = Number(prompt('How many characters should your password have?'));

  if (userInput < 8 || userInput > 128) {
    alert("Password length should be between 8 and 128 characters.");
    return "";
  }
  
  var lowerChecker = confirm("Include lowercase letters?");
  var upperChecker = confirm("Include uppercase letters?");
  var spcchar = confirm('Include special characters? (!@#$%^&*)');
  
  if (!lowerChecker && !upperChecker) {
    alert("You must select at least one character type.");
    return "";
  }
  
  var availableChars = [];
  
  if (lowerChecker) {
    availableChars = availableChars.concat(lowerCase);
  }
  
  if (upperChecker) {
    availableChars = availableChars.concat(upperCase);
  }

  if (spcchar) {
    availableChars = availableChars.concat(spccharctrs)
  }
  
  var password = '';
  
  for (let i = 0; i < userInput; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }
  
  return password;
}
