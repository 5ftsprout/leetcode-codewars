//Two Sum
function twoSum(numbers, target) {
    for (let first in numbers){
      for (let second in numbers){
        if (first != second && numbers[first] + numbers[second] == target) {
          return [first, second]
        }
      }
    } 
}





//Top Relevant Answer
function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}