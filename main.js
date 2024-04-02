
/*function parseInt(string) {
  let arr = string.split(' ')
  arrString = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen'
  arrNum = 123456789101112131415
  arr.splice(arr.indexOf('one'),1,1)
  arr.splice(arr.indexOf('nine'),1,9)
  console.log(arr)
}

parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
.split('_').splice()*/


//Your order, please
function order(words){
  const array = []                                          
  wordsArr = words.split(' ')
  array.length = wordsArr.length                                // Generate empty indexes for words to be slotted into the new array.
  for (let word of wordsArr) {
    num = parseInt(word.split('').sort().join())                // Sort the word so the number is the first character, allowing parseInt to grab the number.
    array.splice(num-1, 1, word)                                // Put the word in the right index while replacing the empty index.
  }
  return array.join(' ')
}


// Replace With Alphabet Position
function alphabetPosition(text) {
  const newText = []
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  text = text.toLowerCase()
  
  for (let i in text) {
    num = alphabet.indexOf(text[i])+1
    if (num != 0) {
      newText.push(num)
    }
  }
  return newText.join(' ')
}

alphabetPosition("The sunset sets at twelve o' clock.")


// Take a Ten Minutes Walk
function isValidWalk(walk) {
  countN = walk.filter(i => i=='n').length
  countS = walk.filter(i => i=='s').length
  countE = walk.filter(i => i=='e').length
  countW = walk.filter(i => i=='w').length
  if ((countN == countS && countE == countW) && (countN + countS + countE + countW) == 10) {
    return true
  } else {
    return false
  }
}


// Duplicate Encoder
function duplicateEncode(word){
  arr = word.toLowerCase().split('')
  let result = ''                                                       // result will store our new string of '(' and ')' characters.
  for (let i in arr) {
    if (arr.filter(char => char == arr[i]).length == 1) {                // If there is only one of that character in the array proceed.
      result += '('
    } else {                                                            // If there is more than one of that character proceed.
      result += ')'                                                     
    }
  }
  return result
}

// Counting Duplicates
function duplicateCount(text){
  const charDupes = [];                                                   // Store character duplicates in charDupes.
  arrSorted = text.toLowerCase().split('').sort();                        // Sort characters so duplicates are side by side.
  for (let i in arrSorted) {                                              // Loop through all characters in the text.
    let currentChar = arrSorted[i];
    let nextChar = arrSorted[Number(i)+1];
    let nextNextChar = arrSorted[Number(i)+2];
    if (currentChar == nextChar && currentChar != nextNextChar) {         // Check that your character matches the next character,
      charDupes.push(currentChar)                                         // but not the one after. Prevents duplicates in charDupes.
    };
  };
  return charDupes.length
};


//Bit Counting
var countBits = function(n) {
  return Number(n.toString(2).split('').reduce((a,b) => Number(a)+Number(b)))
};

//Sum of Digits/Digital Root
function digitalRoot(n) {
  while (n.length != 1) {
    n = n.toString().split('').reduce((a,b) => Number(a)+Number(b))
  }
  return n
}


//Who Likes It?
function likes(names) {
  let who
  if (names.length == 0) {
    return `no one likes this`
  } else if (names.length == 1) {
     return `${names[0]} likes this`
  } else if (names.length == 2) {
    who = `${names[0]} and ${names[1]}`
  } else if (names.length == 3) {
    who = `${names[0]}, ${names[1]} and ${names[2]}`
  } else {
    who = `${names[0]}, ${names[1]} and ${names.length-2} others`
  }
  return `${who} like this`
}


//Find the Odd Int
function findOdd(arr) {                               //We are finding the number in arr array that appears an odd number of times.
  for (let i=0; i<=arr.length; i++) {                 //i is the index of matchNum(the number we compare with every value in arr).
    let matchNum = arr[i]                             
    let num = arr[n]                                  //num is the value in the arr we compare with matchNum.
    let count = 0                                     //count will keep count of how many times num is equal to matchNum.
    for (let n=0; n <= arr.length; n++) {             //n is the index of num.
      if (matchNum == num){
        count++
      }
      if (count%2 !== 0) {                            //If count is odd return matchNum because it has occured an odd amount of times.
        return matchNum;
      }
    }
  }
  return 0;
}


//Count the Digit
function nbDig(n, d) {
  let dMatch = 0                                            //dMatch will hold the total occurances of d up to that point.
  for (n; n>=0; n--) {
    const re = new RegExp(d,'g')
    arrayD = (n**2).toString().match(re)                    //Match returns an array of all instances of d in n squared.
    if (arrayD != null) {
      dMatch += arrayD.length                               //Since it's an array let's get the length and add it to our variable
    }                                                       //dMatch that is holding the amount of ds.
  }
  return dMatch
}


//Multiples of 3 or 5
function solution(number){
  if (number <= 0) {                                        //Return 0 for 0 or negative number.
    return 0
  }
  const arr = []                                            //Create empty array to hold values divisible by 3 or 5.
  for (let i = 1; i < number; i++){                         //Iterate through each value from 0 1 to number.
    if (i%3 == 0 || i%5 == 0){
      arr.push(i)                                           //Pushing values divisble by 3 or 5 to array.
    }
  }
  return arr.reduce((acc, current) => acc + current, 0)     //Return sum of array.
}


//Split Strings
function solution(str){
    let arr = []
    if (str.length%2 !== 0){
      str = str.padEnd(str.length+1,'_')
    }
    for (let i=0; i < str.length; i+=2) {
       arr.push(str.substring(i,i+2))
    }
    return arr
  }

  
//Find the middle element
function gimme (triplet) {
    maxValue = Math.max.apply(null, triplet)
    minValue = Math.min.apply(null, triplet)
    return (triplet.length) - (triplet.indexOf(maxValue)) - (triplet.indexOf(minValue))
  }


//Remove String Spaces
function noSpace(x){
    return x.replaceAll(' ','')
  }


//Convert a String to a Number!
const stringToNumber = function(str){
    return Number(str)
  }


//Remove First and Last Character
function removeChar(str){
    return str.substring(1,str.length-1)
  };


//Get the Middle Character
function getMiddle(s) {
    if (s.length%2 == 0){ 
      return s[s.length/2-1] + s[s.length/2]
    } else {
      return s[Math.floor(s.length/2)]
    }
  }


//String Repeat
function repeatStr (n, s) {
    return s.padStart(s.length*n,s)
  }


//Disemvowel Trolls
function disemvowel(str) {
    return str.replace(/[aeiou]/ig,'')
  }
  
  disemvowel("This website is for losers LOL!")


//Vowel Count
function getCount(str) {
    vowels = str.replaceAll(' ', '').match(/[aeiou]/g);
    if (vowels != null) {
      return vowels.length;
    } else {
      return 0;
      };
  };


//Create Phone Number
function createPhoneNumber(numbers){
    areaCode = numbers.slice(0,3).join('')
    phoneNumStart = numbers.slice(3,6).join('')
    phoneNumEnd = numbers.slice(6,10).join('')
    return `(${areaCode}) ${phoneNumStart}-${phoneNumEnd}`
  }


//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b) => a - b)
    return sorted[0] + sorted[1]
  }



//Square(n) Sum
function squareSum(numbers){
    let sum = 0
    numbers.forEach( (num) => sum += (num*num) )
    return sum
  }


//Duplicate Encoder
function duplicateEncode(word){
    wordArr = word.toLowerCase().split('')
    const newArr = []
    for (i = 0; i < wordArr.length; i++) {
        let letterCount = 0
        wordArr.forEach( (check) => wordArr[i] == check && letterCount++ && console.log(`${wordArr[i]} , ${wordArr[check]}`))
        if (letterCount == 1) {
            newArr.push('(')
        } else {
          console.log(letterCount)
          newArr.push(')')
        }
    }
    return newArr.join('')
}


//Replace With Alphabet Position
function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const arrNum = [];
    const arrText = text.toLowerCase().split('');
    alphabet = alphabet.split('');
    for (i=0; i <= arrText.length; i++) {
      let position = alphabet.indexOf(arrText[i])+1;
      if (position != 0) {
        arrNum.push(position);
      }
    }
    text = arrNum.join(' ').replace('^0','')
    return text;
  }


//Counting sheep
function countSheeps(sheep) {
    let count = sheep.filter((sheep) => sheep == true)
    return count.length
  }


//Stop gninnipS My sdroW
function spinWords(string){ 
    const arr = string.split(" ")
    for (element of arr) {
      if (element.length >= 5) {
        revElement = element.split('').reverse().join('')
        arr.splice(arr.indexOf(element), 1, revElement)
      }
    }
    return arr.join(' ')
  }


//What is between?
function between(a, b) {
    const arr = [];
    if (a < b) {
      for (i=a; i<=b; i++) {
        arr.push(i);
      }
      return arr;
    };
  };


//Convert Boolean Values to Strings
function boolToWord( bool ){
    return bool ? "Yes" : "No";                                  
  };


//Return Negative
function makeNegative(num) {
    if (num > 0) {
      return -(num)
    } else return num
  }


//Reverse Strings
function solution(str){
    return str.split('').reverse().join('');
  }


//Opposite Number
function opposite(number) {
    return 0 - number;
  }


//Convert a Number to a String
function numberToString(num) {
    return num.toString();
  };


//Sum of Positive
function positiveSum(arr) {
    var sum = 0;
    for (i=0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      } 
    }
    return sum;
  }


//Multiply
function multiply(a, b){
    return a * b
  }


//Even or Odd Number
function evenOrOdd(number) {
    if (Number.isInteger(number)) {
      if (number % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }
    return "Invalid integer."
  }