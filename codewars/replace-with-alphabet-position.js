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