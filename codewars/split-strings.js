//Split Strings
function solution(str){
    let arr = []
    if (str.length%2 !== 0){
      str = str.padEnd(str.length+1,'_')
    }
    for (let i=0; i < str.length; i+=2) {
       arr.push(str.substring(i,i+2))
    }
    return arr
  }








// Relevant Top Solution
function solution(str){
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
  }