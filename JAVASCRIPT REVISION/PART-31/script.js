const fruits = ['banana','apple','grapes','orange','pineapple']
//Printing through for loop---
for(let i =0;i<fruits.length;i++){
    console.log(fruits[i])
}
console.log('***********************')
//Printing through for of loop---
for(const fruit of fruits){
    console.log(fruit)
}
console.log('***********************')
//Using for of loop in string

const myName = 'Kapil SArkar'

for(const name of myName){
    console.log(name)
}
console.log('***********************')
//Creating Object

const details = {
    fname : 'Kapil',
    lname :'Sarkar',
    age : 32
}
//Printing the Object
console.log(details)

//Printing the Object details using for in loop

for(const key in details){
    console.log(key, ':', details[key])
}

//Using for of loop in case of object

const detailKey = Object.keys(details)

for(const key of detailKey){
    console.log(key , ':' , details[key])
}