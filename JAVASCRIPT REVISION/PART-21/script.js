//Global Execution Context
const userName = 'Kapil'
const userAge =32
console.log(userName)
//In Case of Functions

sayHii()
function sayHii(){
    const a = 10
    const b = 20
    console.log(a,b)
    const result = addTwoNumbers(50,50)
    console.log(result)
    
}

function addTwoNumbers(x,y){
   return x + y
}


