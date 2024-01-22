//Return Negative
function makeNegative(num) {
    if (num > 0) {
      return -(num)
    } else return num
  }


// Relevant Top Answer
function makeNegative(num) {
    return -Math.abs(num);
  }