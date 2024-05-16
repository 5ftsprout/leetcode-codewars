//The Supermarket Queue
/*function queueTime(customers, n) {
    const tills = []
    let totalTime = 0
    while (n>0) {tills.push(Number(0)); n--;}
    for (customers != []){
        tills.forEach(till => {
            if (till == 0) {
                till += parseInt(customers.pop())
                console.log(`Till is ${till}`)
            }
        });
        for (let till in tills) till--;
        totalTime++;
      }
    return totalTime
  }

  queueTime([2,2,3,3,4,4], 2)
*/



//Relevant Top Answer
  function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
    }
    return Math.max(...w);
  }