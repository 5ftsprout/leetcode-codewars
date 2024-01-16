
//Sum of Positive
function positiveSum(arr) {
    var sum = 0;
    for (i=0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      } 
    }
    return sum;
  }

//Relevant Top Answer
function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }