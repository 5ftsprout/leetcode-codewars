//Remove First and Last Character
function removeChar(str){
    return str.substring(1,str.length-1)
  };



// Relevant Top Answer
function removeChar(str) {
    return str.slice(1, -1);
  }