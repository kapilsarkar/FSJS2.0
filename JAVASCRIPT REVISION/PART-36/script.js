const evenNum = [0,2,4,6,8]
//some() method----
const result = evenNum.some((num)=>{
    return num > 4
   
})

console.log(result)

//every() method---

const result2 = evenNum.every((num)=>{
    return num >4
})

console.log(result2)
