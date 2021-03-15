
function calcAvgSquare(x,y,z) {
    let xsquare = Math.pow(x,y)
    let avgSquare = ((x+y+z)/3)*xsquare
    return avgSquare
    }
    
let numx = Number(prompt('Enter your first number.'))
let numy = Number(prompt('Enter your second number.'))
let numz = Number(prompt('Enter your third and final number.'))

let answer = calcAvgSquare(numx, numy, numz)
alert(`The final answer of your numbers ${numx}, ${numy}, and ${numz} is ${answer}`)
