//While Loop

let i=1;

while(i<=5){
    console.log(i)
    i++
}

const frnds = ['Sachin','Virat','John','Rinku','Brock']


let j=0
while(j<=frnds.length){
  console.log(`${j+1}.${frnds[j]}`)
 
  j++
}

//For Loop
console.log('For Loop Started')
for(let k=1; k<=5; k++ ){
  console.log(k)
}
console.log('For Loop Ended')

const crk = ['Tendulkar','Sehwag','Kohli']

for(let b =0; b <= crk.length; b++){
  console.log(crk[b])
}

//Printing Even Numbers 0 to 100
 for (let m =0 ; m<=50; m++){
   if(m % 2 ===0)
   {
      console.log(m)
   }
 }
