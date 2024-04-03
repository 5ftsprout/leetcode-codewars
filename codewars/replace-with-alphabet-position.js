// Replace With Alphabet Position v2
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




  
// Relevant Top Answer
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}
