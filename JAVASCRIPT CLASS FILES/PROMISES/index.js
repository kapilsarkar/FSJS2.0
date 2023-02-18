//Promises in Javascript--

//A Promise represents the state of an asynchronous operation. This asynchronous operation can be anything i.e fetching data from an API, reading contents from a file, etc.

//The synchronous action that may complete at some point in the future and produce a value. This value is not necessarily known at the time of its creation. Once the value is produced, it notifies the user.

//A JavaScript promise is created with the help of the new keyword.

//General Syntax-

//let some_action = new Promise(function(resolve, reject)

//{

    // Perform some work
  
  //})

//A promise is an object that may provide a value sometime in the future: either a resolved value or a reason that it’s not resolved (e.g., an error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, unsolved or pending and Settled.


//States of Promises--

//Resolved or Fulfilled: – A promise is resolved if its result is available. Simply means something is finished and all went well. (onFullfilled() will be called) e.g., resolve() was called.

//Rejected: – A promise is rejected if an error happened. (onRejected() will be called) e.g., reject() was called.

//Unresolved or Pending: – A promise is pending if the result is not ready. That is, its waiting for something to finish first. (e.g., an asynchronous operation)

//Settled: – A promise is settled if it’s not pending i.e. when it is resolved or rejected. A settled promise is immutability i.e. once settled a promise can’t be resettled.

//Real World Example of Promises-

//Suppose, you visit a Coffee Shop and you place an order for a Black Coffee. Then, the staff says that he has to check whether the Black Coffee is available or not. (So in this case, it returns a promise.)

//If your Black Coffee is available then the staff accepts your order. (In this case, the promise will be fulfilled. So, it will be resolved.)

//And suppose, you place an order for the Black Tea and if tea is not available, since its a Coffee shop, then the staff wouldn't accomplish your order. (In this case, the promise is unfulfilled and as a reason, it is rejected.)

//After placing your order for the Black Coffee, it will take some time to process. And after processing your request, you will receive your Black Coffee and you leave the shop happily!

//Promise Creation--

// const numeven = (num) => new Promise((resolve,reject) => {
//     if(num %2 === 0){
//         resolve(true)
//     }
//     else
//     {
//         reject(fasle)
//     }
// })

//Now the above Promise Created can be used as-

// numeven(11)

// .then(res => console.log(res))
// .catch(err => console.log(err))

// Chaining--

//Promise.then() always returns a new promise, it’s possible to chain promises with precise control over how and where errors are handled.

//Callback functions have been used alone for asynchronous operations in JavaScript for many years. But in some cases, using Promises can be a better option.
//If there are multiple async operations to be done and if we try to use good-old Callbacks for them, we’ll find ourselves quickly inside a situation called callback hell problem. :

// firstRequest(function(response) {  
//     secondRequest(response, function(nextResponse) {    
//         thirdRequest(nextResponse, function(finalResponse) {     
//             console.log('Final response: ' + finalResponse);    
//         }, failureCallback);  
//     }, failureCallback);
// }, failureCallback);


// However, if we handle the same operation with Promises, since we can attach Callbacks rather than passing them, this time the same code above looks much cleaner and easier to read:


// firstRequest()
//   .then(function(response) {
//     return secondRequest(response);
// }).then(function(nextResponse) {  
//     return thirdRequest(nextResponse);
// }).then(function(finalResponse) {  
//     console.log('Final response: ' + finalResponse);
// }).catch(failureCallback);

//The code just above shows how multiple callbacks can be chained one after another. Chaining is one of the best features of Promises.

//Creating and Using a Promise-

//Let’s take a new function as given below-

// function times(){
//   setTimeout(function(){
//     console.log("Executed");
//   },3000);
// }
//Now if we want to return something from times function, we have two options:

//Use a callback function
//Use promise

//The disadvantage of the first approach is that it leads to a callback hell problem

//Now, let’s see how this issue can be solved using promises. To create a promise we use the below given syntax

//new Promise((resolve, reject)=>{
//   if(success){
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

//Example-

// function times(){
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve("TimeOut");
//     }, 3000);
//   });
// }
//Promise provides three methods, to consume promise and handle the result

//then: if promise results in success, then method callback is called
//catch: if promise fails, catch method callback is called
//finally: method callback is called when the promise is fulfilled either in success or failure. Can be used for common tasks such as hiding the loader etc.

