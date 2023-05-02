const months = ['January','February','March','April','May']

//Printing Array elements using for each

months.forEach((months)=>{
    console.log(months)
})

//Map() Function---


const capitalMonth = months.map((month,index)=>{
    console.log(index,month)
    return month.toUpperCase()
    
})
console.log(capitalMonth)

//Other Examples of map() function---
const arr = [5,6,9,10,20]

//Double---

const output = arr.map((x)=>{
   return x * 2
   
})
console.log(output)

//filter()--
//filter all the odd values inside array--

const result = arr.filter((y)=>{
    return y % 2 
    
})

console.log(result)

//reduce()---

const arr2 = [2,10,20,15,32]

function findSum(arr2){
    let sum = 0;

    for(let i =0; i< arr2.length; i++){
        sum = sum + arr2[i]
    }

    return sum
}

console.log(findSum(arr2))

const sumResult = arr2.reduce(function(acc,curr){
    acc = acc + curr 
    return acc
},0)

console.log(`The sum function in case of reduce is :${sumResult}`)