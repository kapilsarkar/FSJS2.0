//What is Function-
//A function means a block of code is first created  and wnenever the block of code is required it will be called.
//To avoid repeating same code again and again all over places, we can use a function to wrap that code and reuse it.
// It helps you to divide a large program into small and manageable functions.

//Declarations of Functions-
// To declare a function, you use the "function" keyword, followed by the function name, a list of parameters, and the function body .

//Syntax-
//function details ()
//{}
// As in the syntax declaration, we can define it by using the function keyword, followed by a function name, open and close parenthesis, and curly braces.

//Now lets understand this with a small example-

// function sum() 
// {
//     let num1=20;
//     let num2=30;
//     console.log('Addtion of numbers is :', num1 + num2);
// }
// sum();

//We started with the function keyword. This is how we declare a function.
//Then, we defined a function name, which is sum.
 // Then, we added parenthesis means (). We use parenthesis to add parameters, which we will be exploring more later in this post.
 // Then, we used curly braces to create a function body. All the code that is within this curly braces is called the function body. And it's this code that will be executed when we run this function.
 //Here in this case two variables are declared num1 and num2 with values 20 and 30 respectively,and then the two functions are added.
 // To use this function, we simply write the function name followed by a parenthesis. And this process is called "invoking", "running", or "calling" the function.Here in this case it is sum().

 //Functions with parameters-

 //parametrs-It is a name or variable that is declared in the function definition.

//Let us understand this with an example-

// function sum(value1,value2){
//     let num1=30;
//     let num2=60;
//     console.log('Addtion of two numbers is', value1+ value2);
// }
// sum(30,60);
// sum(50,120);

//Here in this value1 and value2 are the parametrs
//First the functions is being called with the set varaibles  which is 30 and 60 and they are stored in the respective variables num1 and num2.
//Now the function is being called 3 times and the result are displayed with the desiared values.It is the adavtage of declaring a function with paramerts.

//Funtions with retirn type-
// With the return keyword, we can return any value from the function.
//Let us understand this with an example-
//Function for addition is-
// function sum(val1,val2)
// {
//     let result=val1 + val2;
//     return result;

// }
// let add=sum(20,30);
// console.log(add);
//Here in this case first a function is declared with name sum and with two parametrs val1 and val2.
//Here result stores the addtion of val1 and val2 then by the return the result is going towrds the variable add which stores the value 20 and 30.
//So we see by the function with return we can return any value from the function. 

//Now Different funtions are created for  subtraction ,multiplication,division and modulus.

//function for subtraction is-
// function minus(val1,val2)
// {
//     let result=val1 - val2;
//     return result;
// }
// let sub=minus(30,20);
// console.log('The result of subtraction is',sub);

//Function for multiplication is -
// function mul(val1,val2)
// {
//     let result=val1 * val2;
//     return result;
// }
// let multiply=mul(30,20);
// console.log('The resilt of multiplication is',multiply);

//Function for division is-
// function division(val1,val2)
// {
//     let result=val1 / val2;
//     return result;
// }
// let div=division(30,20);
// console.log('The result of division is',div);

//Function for modulus-

// function modulus(val1,val2)
// {
//     let result=val1 % val2;
//     return result;
// }
// let mod=modulus(30,20);
// console.log('The result of modulus is',mod);

//Function with string-

function URL(url,domain)
{
    let con="https://";
    let result=con + url + domain;
    return result;
}
let google=URL('google','.co.in');
console.log(google);

//Here function named URL is created which contains two parametrs url and domain.
//It gives the output of the search engine googele.co.in