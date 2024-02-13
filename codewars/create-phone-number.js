//Create Phone Number
function createPhoneNumber(numbers){
    areaCode = numbers.slice(0,3).join('')
    phoneNumStart = numbers.slice(3,6).join('')
    phoneNumEnd = numbers.slice(6,10).join('')
    return `(${areaCode}) ${phoneNumStart}-${phoneNumEnd}`
  }



// Relevant top Answer
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }