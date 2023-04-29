//Function Declaration---
function square (num){
    return num * num
}

console.log(square(30))

//Function Expression---

const sqr = function(num){
  return num * num
}

console.log(sqr(50))

//Arrow Function Expression---

const cube = (num) => {
  return num **3
} 

console.log(cube(10))

//Implicit or Automatic return arrow function---

const add = (a,b) => a + b
console.log(add(100,100))

//Arrow Function with set time out---

setTimeout(()=> {
    console.log('Hello Kapil')
},2000)

//Arrow Function with random

const random = () =>Math.floor( Math.random()*10)
console.log(`${random}`)