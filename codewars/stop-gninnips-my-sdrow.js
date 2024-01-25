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



// Relevant Top Answer
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }