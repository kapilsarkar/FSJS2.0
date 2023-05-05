//Spread Using Array---
const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9,10]

const joinedArray = [...nums1,...nums2]

console.log(joinedArray)

//Spread Using Object---

const user = {
    fullname : 'Kapil',
    age :32
}

const updatedUser = {...user,city:'Asansol'}
console.log(updatedUser)

//Spread Using Function---

function add(){
    let sum = 0
    for(let i =0 ; i< arguments.length; i++){
        sum+= arguments[i]
    }
    return sum
}

const result = add(...joinedArray)
console.log(result)