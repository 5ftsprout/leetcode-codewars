//Bit Counting
var countBits = function(n) {
    return Number(n.toString(2).split('').reduce((a,b) => Number(a)+Number(b)))
  };




// Relevant Top Answer
countBits = n => n.toString(2).split('0').join('').length;
