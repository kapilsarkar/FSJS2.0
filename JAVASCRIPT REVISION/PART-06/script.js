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

//STRING METHODS WITH ARGUMENTS

//1. INCLUDES()-

const newMsg = 'Hello Welcome To WWE Wrestlemania'
console.log(newMsg.includes('WWE'))
console.log(newMsg.includes('WWF'))
 //2. INDEXOF()-
console.log(newMsg.indexOf('W'))
console.log(newMsg.indexOf('z'))
//3.REPLACE()-
console.log(newMsg.replace('Hello','Hi'))
//4.REPLACE ALL-
console.log(newMsg.replaceAll('W','w'))
 //5.CONCAT()-
 const msg4 ='Hello Your First Name is Kapil'
 const msg5 ='Hello Yor Last Name is Sarkar'
 console.log(msg4.concat(' ,' , msg5))
 //6.padstart()-
 const last4digits ='7859'
 console.log(last4digits.padStart(16,'*'))
 //7.padend-
 const first4digit ='7859'
 console.log(first4digit.padEnd(16,'*'))
 //8.charAt()-
 const find = 'John Cena Brock Lesnar'
 console.log(find.charAt(5))
//9.charCodeAt-
 const charectorCode = 'JOHN CENA'
 console.log(charectorCode.charCodeAt(7))
//10.split()-

const splitmsg ='Namaste Kapil Sarkar'
console.log(splitmsg.split(' '))


const templateString = `Last 4 Digits of my Account Number is ${first4digit}`
console.log(templateString)