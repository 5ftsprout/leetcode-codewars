//Tidy Number (Special Number Series #9)
function tidyNumber(n){
    n = n.toString()
    for(let i = 0; i < n.length-1; i++){
      if(n[i] > n[i+1]) return false
    }
    return true
  }




//Relevant Top Answer
function tidyNumber(n){
    return [...n+=""].sort().join``==n
  }