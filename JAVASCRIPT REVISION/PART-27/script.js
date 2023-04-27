console.log('Hi-1')    //Synchronous Code

function hello(){
    console.log('Hello World-3')
}
for(let i=1 ; i<=5; i++){
    console.log(i)
}
setTimeout(hello,9000)  //Asynchronous code 
console.log('Hi-2')

