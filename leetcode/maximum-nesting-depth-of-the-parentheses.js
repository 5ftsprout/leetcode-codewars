//Maximum Nesting Depth of the Parentheses
var maxDepth = function(s) {
    let depthCount = 0;
    let deepest = 0;
    for (let ele of s){
        if (ele === '(') depthCount++;
        if (ele === ')') depthCount--;
        if (depthCount > deepest) deepest = depthCount;
    };
    return deepest;
};





//Value Within Maximum Nesting Depth of the Parentheses
var maxDepth = function(s) {
    let depthCount = 0;
    let deepest = 0;
    let num = 0;
    for (let i=0; i < s.length; i++){
        if (s[i] === '(') depthCount++;
        if (s[i] === ')'){
            if (depthCount > deepest){
                deepest = depthCount;
                num = s[i-1]
            };
        };
    };
    return num
};




//Top Relevant Solution
class Solution {
    public int maxDepth(String s) {
        int count=0,max=0;
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='(') count++;
            max=Math.max(count,max);
            if(s.charAt(i)==')') count--;
        }
        return max;
    }
}