
function introduceMe(){
    console.log('Hi')
    console.log('My Name is Kapil Sarkar')
    console.log('I am a Web Developer.')
    
}
// const returnValue= introduceMe()
// console.log(returnValue)

introduceMe()
 

//Function with arguments

function introduce(username = 'On Going Process',eduction ='Learning',age ='counting'){
    console.log(`Hi My Name is ${username}`)
    console.log(`I am a ${eduction} `)
    console.log(`My Age is ${age} year's old`)
}

introduce('Kapil Sarkar','Software Engineer',32)
introduce('Brock Lesnar','Elctrical Engineer ',46)
introduce()

//Function with return type

function addTwoNumbers(a ,b){
    return a + b
}
const result = addTwoNumbers(9,10)
console.log(`The Output of Addition is ${result}`)