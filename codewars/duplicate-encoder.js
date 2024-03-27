// Duplicate Encoder v2
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


// Duplicate Encoder
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





// Relevant Top Answer

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}