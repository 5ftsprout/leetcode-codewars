// Take a Ten Minutes Walk
function isValidWalk(walk) {
    countN = walk.filter(i => i=='n').length
    countS = walk.filter(i => i=='s').length
    countE = walk.filter(i => i=='e').length
    countW = walk.filter(i => i=='w').length
    if ((countN == countS && countE == countW) && (countN + countS + countE + countW) == 10) {
      return true
    } else {
      return false
    }
  }