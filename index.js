function isPalindrome(word) {
  const arrayWord = word.split('')
  const reverseArrayWord = arrayWord.reverse()
  const reverseWord = reverseArrayWord.join('')

  if (word === reverseWord){
    return true
  } else {
    return false
  }
}

/* 
  turn the string into an array
  reverse the array values 
  join the array
  compare the strig to the reverse value
*/

/*
  we turned the word into an array then reversed the array and ,erged it, then compared itt to the original word, if the words 
  were equal that means they are a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("labal", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("alex", isPalindrome("robot"));
}

module.exports = isPalindrome;
