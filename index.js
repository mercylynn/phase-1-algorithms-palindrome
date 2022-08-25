function isPalindrome(word) {
  // Write your algorithm here
  var lowerCase=word.toLowerCase();
  var reverseString=lowerCase.split('').reverse().join('');
  return (lowerCase===reverseString ? true:false)

}

/* 
  Add your pseudocode here
  Define the function and pass word as a parameter
  Lowercase the string
  Use chaining methods with built-in functions to reverse the word
  Compare the original word with the reversed word
  If the temporary and original words are same, it the number or string is a Palindrome.
  Else the given string or number is not the Palindrome.
*/

/*
  Add written explanation of your solution here
*/
  /*convert string to an array reverses the array and converts the array back to a string
  var lowerCase=word.toLowerCase();
 Check if reverseStr is strictly equals to lowRegStr and return a Boolean
 var reverseString=lowerCase.split('').reverse().join('');*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));


  console.log("Expecting: false");
  console.log("=>", isPalindrome("mercy"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("bob"));


}

module.exports = isPalindrome;
