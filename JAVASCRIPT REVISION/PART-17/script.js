//Array---
const fruits = ['Mango','Apple','Orange']

const myFruits = fruits

myFruits.push('Dates')
myFruits.push('Grapes')

console.log(myFruits)
console.log(fruits)

//Object---

const user1 = {
    firstName : "Kapil",
    lastName :"Sarkar",
}

// const user2 = user1

// console.log(user2)

// user2.firstName = 'Piku'

// console.log(user2)
// console.log(user1)
//  const user2 = {}
 
//  Object.assign(user2,user1)
//  user2.firstName = 'Piku'
 
//  console.log(user1)
//  console.log(user2)

 const user2 ={...user1}
user2.firstName ='John Cena'
console.log(user1)
console.log(user2)

const cricketers =['Sachin','Dravid','Kohli','Dhoni','Sehwag']

const myCricketers = [...cricketers]

// Object.assign(myCricketers,cricketers)

myCricketers.push('Rohit')

console.log(cricketers)
console.log(myCricketers)

