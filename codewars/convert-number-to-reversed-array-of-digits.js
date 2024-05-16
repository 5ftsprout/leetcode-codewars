//Convert Number to Reversed Array of Digits
function digitize(n) {
    return n.toString().split('').map(i=>Number(i)).reverse()
  }


//Top Relevant Answer
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }