//Consecutive Strings
function longestConsec(strarr, k) {
    let longest = ''
    //If k (the number of strings to concatenate) is larger than the amount of strings in the array, is 0 or negative 
    //return an empty string
    if (strarr.length < k || k <= 0){
        return ''
    }
    //loop through each string in the array
    for (let i=0; i < strarr.length; i++) {
        //catWord will hold k amount of string concatenated
        let catWord = ''
        let x = 0
        //concatenate the next string into catWord until it's the proper amount k
        while (x < k) {
        if (strarr[x+i] != null){
            catWord = catWord + strarr[x+i]
        }
        x++
      }
      //compare the concatenated word with the previous longest word
      catWord.length > longest.length ? longest=catWord : longest=longest
    }
    return longest
}


//Relevant Top Answer
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
        var tempArray = strarr.slice(i,i+k);
        var tempStr = tempArray.join("");
        if(tempStr.length > longest.length){
            longest = tempStr;
        }
    }
    return longest;
}