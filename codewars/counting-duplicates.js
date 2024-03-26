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




  // Relevant Top Answer
  function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }