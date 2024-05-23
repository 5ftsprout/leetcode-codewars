//Image Host Filename Generator
function generateName(){
    let str = ''
    for(let i=0; i < 6; i++) {
      str += String.fromCharCode( Math.random()*26+65 )
    }
    if (photoManager.nameExists(str)){
        generateName()
    } else {
        return str
    }
}




//Top Relevant Solution
function generateName()
{
  let string = Math.random().toString(36).substr(2, 6);
  console.log(string)
  return string
}