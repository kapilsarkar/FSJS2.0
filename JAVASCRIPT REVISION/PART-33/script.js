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