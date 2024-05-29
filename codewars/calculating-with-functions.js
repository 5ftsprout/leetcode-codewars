//Calculating With Functions
function zero(exp) {return exp ? exp(0) : 0}
function one(exp) {return exp ? exp(1) : 1}
function two(exp) {return exp ? exp(2) : 2}
function three(exp) {return exp ? exp(3) : 3}
function four(exp) {return exp ? exp(4) : 4}
function five(exp) {return exp ? exp(5) : 5}
function six(exp) {return exp ? exp(6) : 6}
function seven(exp) {return exp ? exp(7) : 7}
function eight(exp) {return exp ? exp(8) : 8}
function nine(exp) {return exp ? exp(9) : 9}

function plus(num2) {return num1 => num1 + num2}
function minus(num2) {return num1 => num1 - num2}
function times(num2) {return num1 => num1 * num2}
function dividedBy(num2) {return num1 => Math.floor(num1 / num2)}





//Relevant Top Solution
const zero = a => a ? a(0) : 0
const one = a => a ? a(1) : 1
const two = a => a ? a(2) : 2
const three = a => a ? a(3) : 3
const four = a => a ? a(4) : 4
const five = a => a ? a(5) : 5
const six = a => a ? a(6) : 6
const seven = a => a ? a(7) : 7
const eight = a => a ? a(8) : 8
const nine = a => a ? a(9) : 9

const plus = a => b => a + b
const minus = a => b => b - a
const dividedBy = a => b => Math.floor(b / a)
const times = a => b => a * b


//Another Relevant Top Solution
const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => fn => fn ? fn(idx) : idx);
const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(val => new Function(`b`, `return a => a ${val} b ^ 0`));