var containsDuplicate = function(nums) {
    let unique = [...new Set(nums)]
    return unique.length == nums.length ? false : true
};