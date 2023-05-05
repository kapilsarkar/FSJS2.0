function multiply(a,b=2){
    return a * b
}

const result = multiply(10)
console.log(result)

function rollAdice(numberOfSides=6){
    return Math.floor(Math.random()*numberOfSides) + 1
}

const result2 = rollAdice()
console.log(result2)