//HOF-hIGHER ORDER FUNCTION-
//HOF TAKES OTHER FUNCTION AS PARAMETER AND RETURN A FUNCTION IN HOF 
//Higher-Order Functions(HoF): A function that takes another function(s) as an argument(s) and/or returns a function as a value.
//CALL BACK FUNCTION WHICH CAN BE PASSED AS A PARAMETER TO OTHER FUNCTION

//CALLBACK DEFINATION-
//Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.
//Callback Functions are those functions that are passed as an argument to another function. And the function in which these are passed is called Higher-Order Function.
//Callback Functions(CB): A function that is passed to another function.

//Example-
//  let hof=(callback)=>{
//     return callback;
//  }
 //console.log(hof);
 

 //Here hof is a higher order function takes a function as a parameter and (callback) is a function that is passed as an argument.

 //In Simple Words-
 // a callback function is a function that is
 //1. Passed as an argument to another function
 //2.a callback function is invoked inside the outer function to which it is passed as an argument to complete the event.
 //Callback functions are generally triggered after all statements in another function are executed.
//A callback means we have to implement arrow function
 //Example of Callback Using Array-
//  const arr=["My","Name","is","Kapil","Sarkar"];
//  arr.forEach((value) => {
//    console.log(value);
//  });

 //Here For each is a function which itterates over the whole array.
 //In tHis Case foreach() is HOF and the ()=>{} it is callback.

 //There are two types of callback Function
 //Synchronous-Synchronous means the code statements execute immediately after one another in a sequential manner.
 //The synchronous callback is executed during the execution of the higher-order function that uses the callback.
 //Asynchronus-The asynchronous callback is executed after the execution of the higher-order function.

 //Differeent Call Back functions-
 //map()-Means to map something with everyone

 //Example-
//  const num=[1,2,3,4,5,6];
//  const numstore = num.map((num) => num*num);
//  console.log(numstore);
 //This map function will iterate over the whole array and the result will be square of the numners in the array.

 //filter()-The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

//  const arr=["India","Australia","England","Finland","Ireland","Newzeland","Tland"];
//  const result= arr.filter((value)=>value.includes("land") && value.length>=6);
//  console.log(result);
//Here in this case it ill itterate over the array and filter the element which includes land and the lenght of the element greater than equal to 6.


//sort()-
//It will sort according to alpabetical order


// const names=["Kapil","Sachin","Virat","Dhoni","Zaheer","Hardik"];
// console.log(names.sort());
// console.log(names.reverse());;
//Thre reverse will reverse the sorted array.

//Reduce()-
//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.


//Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

// const num=[1,2,3,4,5,6,7];
// const sum=num.reduce((accumulator,current) => accumulator + current, 1);
// console.log(sum);

//find()-
//The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned

// const num = [20,30,50, 70,90];
// const result = num.find(e => e >20);
// console.log(result);

//every()-The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// const num=[10,20,30,40,50,70];
// const result = (value) => value < 90;
// console.log(result.every(num));


//Destructuring-
const value=["Kapil","Sarkar","Asansol"];
let [fname, lname, address] = value;
console.log(fname,lname,address);


const arr=[1,2,3];
let [val1,  ,val2]=arr;
console.log(val1,val2);
