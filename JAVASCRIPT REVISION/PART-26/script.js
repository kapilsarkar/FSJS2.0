setTimeout(
  `
console.log("Kapil Sarkar")
 console.log("Hello You are welcome")`,
  2000
);

//Set TimeOut with Zero Milli Second Time
const timer1 = setTimeout(`console.log("Hello Brock Lesnar")`,0)
console.log("Welcome to the Game")

//Set Time Out as Higher Order Function

const timer = setTimeout(a,3000)
 function a (){
    console.log('Hello World of Cricket')
 }

 a()


 setTimeout(function(){
  console.log('Hi Kapil 1')
 },0)

 console.log('Hi Kapil 2')