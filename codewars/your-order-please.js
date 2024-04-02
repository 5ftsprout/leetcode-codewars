// Your order, please
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

console.time('order')
order("is2 Thi1s T4est 3a")
console.timeEnd('order')





// Relevant Top Answer
function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
        for(j = 0; j < array.length; j++) {
            if(array[j].indexOf(i) >= 0) {
                sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
}

console.time('order')
order("is2 Thi1s T4est 3a")
console.timeEnd('order')