//TRY CATCH THRWO IN JAVASCRIPT---
//In thhis atricle we are going to learn about try cach throw in javascript-
//Ithese are used mainly for error handling purpose .
//Types of errors in javascript-
//Syntax- Error-- Error in the syntax. For example, if you write consol.log('your result');, the above program throws a syntax error. The spelling of console is a mistake in the above code.

//Runtime Error: This type of error occurs during the execution of the program. For example, calling an invalid function or a variable.
//These errors that occur during runtime are called exceptions. Now, let's see how you can handle these exceptions.
//styntax--
//try {
    // body of try
// } 
// catch(error) {
//     // body of catch  
// }

//1. try--The try statement lets you test a block of code for errors.The main code is inside the try block. While executing the try block, if any error occurs, it goes to the catch block.

//The try block defines the code to be executed which may cause the error.
//This error may cause due to some runtime issue or a programmer error.
//When this code in try block will fail the catch block will be executed.
//2.catch--The catch statement lets you handle the error.The catch block handles the errors as per the catch statements.If no error occurs, the code inside the try block is executed and the catch block is skipped.
//n the catch block, the necessary action can be taken in case of failure.

//Example--
// try{
//     let fname="Kapil";
//     console.log(fname + "" + lname );
// }
// catch(err)
// {
//     console.log(err.lname,"Variable name is missing");
// }
// finally{
//     console.log("It will Run");
// }
//Here in the output it will clearly visbile that lname varible is undefined so it will print that
//But what is about the finally statement let us explore that.
//Finally--The finally statement lets you execute code after try and catch regardless of the result
//The finally block is always used with a try-catch statement.
//There can be only try statement or try with catch statement along with finally block.
//In case of execution of either try block or catch block, the finally block will be executed in any condition.
//The usage of catch and finally statements is not compulsory to be used both at a time but at least one of them should be used while using a try statement.

//throw statement--

//The throw keyword can create customized exceptions, which can be thrown based on certain conditions.
//The throw statement can be used within a try block of code to create your own run-time errors.
//When an exception occurs in the try block, JavaScript will normally stop, and control will be passed to the catch block with a user-defined exception (message).
//If no catch block exists among caller functions, the program will terminate.