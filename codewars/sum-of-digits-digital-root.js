//Sum of Digits/Digital Root
function digitalRoot(n) {
    while (n.length != 1) {
      n = n.toString().split('').reduce((a,b) => Number(a)+Number(b))
    }
    return n
  }



// Relevant Top Answer
function digital_root(n) {
    return (n - 1) % 9 + 1;
  }