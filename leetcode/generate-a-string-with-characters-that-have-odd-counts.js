//Generate a String with Characters that have Odd Counts
var generateTheString = function generateString(n) {
    //Generate a randomized string with alphabetical letters n in length.
    let str = ''
    for(let i=0; i < n; i++) {
        str += String.fromCharCode( Math.random()*25+97 )
    }
    //Count how many occurences of each letter.
    for(let j=0; j < n; j++){
        let count = 0
        for(let k=0; k < n; k++){
            if (str[j] == str[k]) count++;
        }
        //If the count is an even number generate a new string.
        if (count % 2 == 0){
            console.log(`${str} contains even letters.`)
            return generateString(n)
        }
    }
    return str
};

