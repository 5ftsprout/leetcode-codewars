//Count the Digit
function nbDig(n, d) {
    let dMatch = 0                                            //dMatch will hold the total occurances of d up to that point.
    for (n; n>=0; n--) {
      const re = new RegExp(d,'g')
      arrayD = (n**2).toString().match(re)                    //Match returns an array of all instances of d in n squared.
      if (arrayD != null) {
        dMatch += arrayD.length                               //Since it's an array let's get the length and add it to our variable
      }                                                       //dMatch that is holding the amount of ds.
    }
    return dMatch
  }




// Relevant Top Answer
function nbDig(n, d) {
var res=0;
    for (var g=0;g<=n;g++){
      var square=(g*g+"").split("");
      square.forEach((s)=>s==d?res++:null)
    }return res;
}