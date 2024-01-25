//What is between?
function between(a, b) {
    const arr = [];
    if (a < b) {
      for (i=a; i<=b; i++) {
        arr.push(i);
      }
      return arr;
    };
  };


//Relevant Top Answer
function between(a, b) {
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
  }