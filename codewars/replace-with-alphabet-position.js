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




  
// Relevant Top Answer
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}
