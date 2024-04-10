//Equal Sides of An Array
function findEvenIndex(arr){
    for (let i in arr){
        let left = arr.slice(0,i)
        let right = arr.slice(Number(i)+1)
        if (left.reduce((a,b) => a+b,0) == right.reduce((a,b) => a+b,0)){
            return Number(i)
        } else if (left == null && right == 0){
            return 0
        }
    }
    return -1
}




//Top Relevant Solution
function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}