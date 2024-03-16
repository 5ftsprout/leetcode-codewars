//Find the middle element
function gimme (triplet) {
    maxValue = Math.max.apply(null, triplet)
    minValue = Math.min.apply(null, triplet)
    return (triplet.length) - (triplet.indexOf(maxValue)) - (triplet.indexOf(minValue))
  }





// Relevant Top Answer
function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }