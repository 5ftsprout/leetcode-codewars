//Complementary DNA
function dnaStrand(dna){
    arr = dna.split('')
    arr.forEach((letter,i) => {
        switch(letter) {
            case 'A': arr[i] = 'T'; break;
            case 'T': arr[i] = 'A'; break;
            case 'C': arr[i] = 'G'; break;
            case 'G': arr[i] = 'C'; break;
            default: 'no'
        }
    })
    return arr.join('')
}





//Relevant Top Answer
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}