//Unique in Order
var uniqueInOrder=function(iterable){
    const unique = []
    if (typeof iterable == 'string'){
        iterable = iterable.split('')                               // If input is a string let's change it into an array.
    }
    for (let i in iterable) {                                       // Loop through the index since we will be comparing the value
        if (iterable[i] != iterable[Number(i)+1]) {                 // at the current index and the next index.
            unique.push(iterable[i])
        }
    }
    return unique
}





//Relevant top Answer
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}