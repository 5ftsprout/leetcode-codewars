//How Many are Smaller Than Me?

function smaller(nums) {
    let ans = [];
    for (let i in nums){
      let count = 0;
      for (let j=i; j < nums.length; j++){
        if (nums[i] > nums[j]) count++;
      };
      ans.push(count);
    };
    return ans;
  };


function smaller(nums) {
    return nums.map((num, i) => {
        rightNums = nums.slice(i)
        smallerNums = rightNums.filter(smallerOrBiggerValue => num > smallerOrBiggerValue)
        return smallerNums.length
    })
    
}





//Top Relevant Answer
const smaller = nums => 
    nums.map((x, i) => 
        nums.slice(i)
        .filter(y => x > y)
        .length);

