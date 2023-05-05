function add(){
    let sum = 0
    for(let i =0;i< arguments.length; i++){
        sum+= arguments[i]
    }

    return sum
    
}

const result = add(2,10,50,100,200)
console.log(result)

