//Multiples of 3 or 5
function solution(number){
    if (number <= 0) {                                        //Return 0 for 0 or negative number.
      return 0
    }
    const arr = []                                            //Create empty array to hold values divisible by 3 or 5.
    for (let i = 1; i < number; i++){                         //Iterate through each value from 0 1 to number.
      if (i%3 == 0 || i%5 == 0){
        arr.push(i)                                           //Pushing values divisble by 3 or 5 to array.
      }
    }
    return arr.reduce((acc, current) => acc + current, 0)     //Return sum of array.
  }

  



// Relevant Top Answer
function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }