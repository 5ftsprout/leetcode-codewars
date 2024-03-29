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


// Relevant Top Answer
function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}