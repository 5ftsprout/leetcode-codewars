//Counting sheep
function countSheeps(sheep) {
    let count = sheep.filter((sheep) => sheep == true)
    return count.length
  }


//Relevant Top Answer
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }