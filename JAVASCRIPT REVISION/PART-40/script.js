const nums1 = [1,2,3,,4,5]

function add(...nums){
    console.log(nums)
    let sum = 0
    for(let i=0;i<nums.length;i++){
        sum+= nums[i]
    }
    return sum
}

const result = add(1,5,10,20,100)
console.log(result)