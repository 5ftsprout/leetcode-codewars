//Highest Scoring Word
function high(x){
    wordArr = x.split(' ')
    let highest                                                                                 //This variable will hold the word with the highest value.
    wordArr.forEach((word) => highest = getSum(word) > getSum(highest) ? word : highest)        //Loop through each word comparing the word's value with the word with the highest value so far.
    return highest
}

function getSum(word){                                                                          //Get sum value of letters in word using UTF-16.
    let sum = 0
    for (let i in word) {
        charCode = word.charCodeAt(i)
        if (charCode >= 97 && charCode <= 122) {
            sum += (charCode - 96)
        }
    }
    return sum
}





//Relevant Top Answer
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }