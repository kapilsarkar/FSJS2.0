//Spread And Rest In java Script--
//In Java Script The three ... operators means Spread and Rest but these two operators are not the same.
//We will understand the difference later in this article 
//Spread Operator--
// While sending data then spreading of data is known as spreading.
//In Javascript, we use the spread operator to split up array elements or object properties.
//Spread Operator Examples--
//Using Array--
//The spread operator is used to divide array elements or properties on objects so that array elements can be added/inserted into new arrays. Here's an example of its use


//  const details=['Kapil','SArkar','Asansol','MCA','Sofware Developer'];
//   const newdetails=[...details,'Cricket'];
//   console.log(newdetails);


  //Here in this case first and array is declared named details with various elementss then new variable is declared by the name newdetails and  with the help of spread operator means in this case ...details a new elements is inserted in the array. 

  //Using Object--
//   const details = {
//     rollno:1,
//     student:"Kapil Sarkar"
//   }

//   const newdetails = {
//     ...details,
//     newrollno:2,
//     student2:"Sachin Tendulkar"

//   }
//   console.log(newdetails);

//Using Function---

// function sum(x,y,z){
//     return x + y + z;
// }

// let output=[20,30,90];

// console.log(sum (...output)); 

//Rest Operator--
//Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function.
//The rest parameter syntax allowed us to represent an indefinite number of arguments as an array.
//The rest operator is also denoted by ...
//Example of rest operator using function

// function sum(...value){
//     console.log(value);  //it will give you in the form of an array

//     let result=0;
//     for(let i of value){
//         result=result + i;
//     }
//     return result;
    
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));

//There must be only one rest operator in javascript functions
//spread vs rest---
//JavaScript uses three dots (...) for both the rest and spread operators. But these two operators are not the same.
//The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.
//Depending on your use case, you can choose which one you need.
