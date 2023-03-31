const fname ='Kapil'
console.log(fname[0])
console.log(fname[1])
 const fullname = 'Kapil Sarkar'

 const msg = 'Hello Good Morning India'

 console.log(fullname[6]) //Here we want to access the charector S ,Space will also be counted. 

 //LENGTH IN A STRING

 console.log(msg.length) //Space is Also Counted
//TO UPPER CASE
console.log(msg.toUpperCase())
//to lowe case
console.log(msg.toLowerCase())

//TRIM
const faltuMessage = '    Hello, My Name is Kapil '
const finalMeassge = faltuMessage.trim().toUpperCase();
console.log(finalMeassge)   
//TRIM START
const msg2 = '   Hello John Cena    '
console.log(msg2.trimStart())
//TRIM END
console.log(msg2.trimEnd())
