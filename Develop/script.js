// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var plength = []
var passwordChar = [];
var results = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword () {
 var userInput = Number(prompt('How many characters should your password have?'));
 console.log("USER INPUT: ", userInput);
 var lowerChecker = confirm("Lower");
 if (lowerChecker) {
  passwordChar.push(lowerCase)
 }

 for (let i = 0; i < userInput; i++) {
  results.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
 }
 console.log("RESULTS: ", results);
 return results.
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Add function: when user clicks "generate password" button,
// then page displays a series of prompts to choose from: 
  function displayprompt() {
    
  }
  

// const generate = document.addEventListener('generate');
//   function plength() {
 
// }


