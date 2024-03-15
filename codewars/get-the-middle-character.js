//Get the Middle Character
function getMiddle(s) {
    if (s.length%2 == 0){ 
      return s[s.length/2-1] + s[s.length/2]
    } else {
      return s[Math.floor(s.length/2)]
    }
  }




// Relevant Top answer
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}