//Even or Odd Number
function evenOrOdd(number) {
    if (Number.isInteger(number)) {
      if (number % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }
    return "Invalid integer."
  }


//Relevant Top Answer
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }