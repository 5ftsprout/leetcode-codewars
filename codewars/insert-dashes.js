function insertDash(num) {
    let arr = num.toString().split('')
    for (let i=0; i < arr.length-1; i++){
        if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0){
          arr.splice(i+1,0,'-')
          i++
        }
      }
    return arr.join('')
  }