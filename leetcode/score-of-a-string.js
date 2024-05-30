//Score of a String
var scoreOfString = function(s) {
    let asciiArr = [];
    let ascii;
    let score = 0;
    for (let letter of s){
        ascii = Number(letter.charCodeAt());
        asciiArr.push(ascii);
    };
    for (let i=0; i < asciiArr.length-1; i++){
        difference = Math.abs(asciiArr[i] - asciiArr[i+1])
        score += Number(difference)
    }
    return score
};




//Relevant Top Answer
var scoreOfString = function (s) {
    let sum = 0;
    for (let i = 0; i < s.length - 1; i++) {
        sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }

    return sum;
};


function scoreOfString(s: string): number {
    let sum = 0;
    for (let i = 0; i < s.length - 1; i++) {
        sum += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
    }
    return sum;
};