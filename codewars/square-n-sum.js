//Square(n) Sum
function squareSum(numbers){
    let sum = 0
    numbers.forEach( (num) => sum += (num*num) )
    return sum
  }



//Relevant Top Answer
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }