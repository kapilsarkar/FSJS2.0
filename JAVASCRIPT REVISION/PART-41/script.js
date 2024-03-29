//Destructuring---
//Array---
const colors = ['red','green','yellow','blue','orange','purple']

const color0 = colors[0]
const color1 = colors[1]
const color2 = colors[2]

console.log(color0,color1,color2)

//Same thing can be done through array destructuring

const [cl1,cl2,cl3] = colors
console.log(`The values through array destructuring ${cl1} ${cl2} ${cl3}`)

//Destructuring a specific value from an array---

const {3:cl4} = colors
console.log(`Destructuring a specific value from an array : ${cl4}`)

//Object---

const user = {
    fullName : 'Kapil Sarkar',
    age :32,
    address: {
        city : 'Asansol',
        state : 'West Bengal',
    }
}
 const ag = user.age
 const nm = user.fullName
 const ct = user.address.city

 console.log(nm,ag,ct)

 //Same thing can be done through object destructuring---

const {fullName : username ,age : userage} = user

console.log(`The values through object destructuring is : ${username} , ${userage}`)

const {address : {city : usercity}} = user

console.log(usercity)

//Destructuring  through function---

function intro({fullName,age}){
  console.log(fullName,age)
}

intro(user)