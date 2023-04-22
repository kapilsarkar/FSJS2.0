//Function 1
function a (msg,details,pin){
    console.log(msg ,details,pin)
    console.log(typeof msg)
    console.log(typeof details)
    console.log(typeof pin)
}

a('Hello Kapil WElcome to a',{username : 'Kapil',age :32},[1,5,9])

// Function 2

function first (mfirst){
    console.log(mfirst)
    mfirst()
}

function second () {
    console.log('Hello My Name is Paul Heyman')
}

first(second)
//Anonymous Function or Call Back Function
first (function(){
    console.log('Hello Brock Lesnar')
})