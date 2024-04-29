//Frog's Dinner
function frogContest(n) {
    const sum = x => (x*(x+1))/2
    let chris = sum(n)
    let tom = sum(Math.floor(chris/2))
    let cat = sum(chris+tom)
    return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`
  }