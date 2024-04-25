//Delete occurences of an Element if it Occurs more than n times
function deleteNth(arr,n){
    const unique = new Set(arr)                                   //Create a set with all unique values.
    if (n == 1) {return [...unique]}                              //Returns the set if the number of occurences you are looking for is 1.
    else {unique.forEach(i => {                                   //Looping through each unique value.
            let count = arr.filter(num => num == i).length        //count variable will hold the number of occurences for that unique value.
            if (count > n) {                                      //Compare the number of occurences vs the number of occurences you are looking for.
                let x = 0
                while (x < (count - n) ) {                        //While loop deleting extra occurences of the value starting from the right side of the array.
                    arr.splice(arr.lastIndexOf(i),1)
                    x++
                }
            }
        })}
    return arr
}


//Relevant Top Solution
function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }
