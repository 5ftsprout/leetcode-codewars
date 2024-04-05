//Decode the Morse Code
decodeMorse = function(morseCode){
    const decodedWords = []
    arrWords = morseCode.trim().split('   ')                            //Split the sentence into words.
    arrWords.forEach(word => {                                          
            arrLetters = word.trim().split(' ')                         //Split the word into letters.
            decodedWords.push(decodeLetter(arrLetters).join(''))        //Decode the letter, join letters into words, push words to array.
        }
    )
    return decodedWords.join(' ')                                       //Join the words into a sentence separated by whitespace.
}

function decodeLetter(){
    arrLetters.forEach((code,i) => {
        arrLetters[i] = MORSE_CODE[code]                                //Use Morse Code dictionary to decode the morse code letter.
    })
    return arrLetters
}



//Relevant Top Solution
decodeMorse = function(morseCode){
    function decodeMorseLetter(letter) {
      return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
      return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
  }