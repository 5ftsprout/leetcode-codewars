//Find the Odd Int
function findOdd(arr) {                               //We are finding the number in arr array that appears an odd number of times.
    for (let i=0; i<=arr.length; i++) {                 //i is the index of matchNum(the number we compare with every value in arr).
      let matchNum = arr[i]                             
      let num = arr[n]                                  //num is the value in the arr we compare with matchNum.
      let count = 0                                     //count will keep count of how many times num is equal to matchNum.
      for (let n=0; n <= arr.length; n++) {             //n is the index of num.
        if (matchNum == num){
          count++
        }
        if (count%2 !== 0) {                            //If count is odd return matchNum because it has occured an odd amount of times.
          return matchNum;
        }
      }
    }
    return 0;
  }





  // Relevant Top Answer
  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);