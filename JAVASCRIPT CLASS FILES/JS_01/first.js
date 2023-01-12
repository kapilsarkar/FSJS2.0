//JAVASCRIPT--JAVASCRIPT IS AN SCRIPTING LANGUAGE.IT WAS STARTED IN 1995.IT IS TYPE PF FUNCTIONALITY TO THE BROWSER.JAVASCRIPT WAS INITIALLLY CREATED TO MAKE WEB PAGES ALIVE.
// THE PROGRAMS IN THIS LANGUAGE ARE CALLED SRIPTS.THEY CAN BE WRITTEN RIGHT IN A WEB PAGES HTML AND RUN
//AUTOMATICALLY AS THE PAGE LOADS.

//INITIALLY WHEN JAVASCRIPT WAS CREATED IT INITIALLY HAD ANOTHER NAME -LIVESRIPT.
// NOW-JAVA VS JAVASCRIPT--IN ONE LINE IT CAN SAID THAT IT IS A TYPE OF YOUNGER BROTHER OF JAVA.
//But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.JavaScript is a lightweight programming language(“scripting language”) and is used to make web pages interactive. It can insert dynamic text into HTML. JavaScript is also known as the browser’s language. JavaScript(JS) is not similar or related to Java. 

//JAVA IS AN OBJECT ORIENTED PROGRAMMING LANGUAGE.AND HAS A VIRTUAL MACHINE PLATFORM hat allows you to create compiled programs that run on nearly every platform. Java promised, “Write Once, Run Anywhere”.


//JAVA- 1 Java is a strongly typed language and variables must be declared first to use in the program. In Java, the type of a variable is checked at compile-time.
//2 Java program has the file extension “.Java” and translates source code into bytecodes which are executed by JVM(Java Virtual Machine).3 Java supports multithreading. AND MAINLY USED IN BACEND.                                    JAVASSCRIPT-1 JavaScript is an object-based scripting language. 2. JavaScript is a loosely typed language and has a more relaxed syntax and rules.JavaScript code used to run only in the browser, but now it can run on the server via Node.js.
// 3.Javascript doesn’t support multi-threading. AND JAVA SCRIPT USES LESS MEMORY

//BRIEF HISTORY:The 1st name of JS is Mocha and after that, the name is change to LiveScript in 1995, and again its name changed to JavaScript in 1996, and this name we are using till date.

// so when this scripting will come into the market that time there will be two browsers available in the market Netscape (web browser) and Internet Explorer ,these two browsers are there in the market at that time.

// So at that time, both browsers are decided to make or set common rules to develop a website and ECMAScript comes into the picture , till date it time to time getting updates and now we are using its version of ES6. So this is the finest standard till date which comes in 2015 and still, this is there in the market.

//ECMA AN ORGANISATION WHILE CREATED CERTAIN RULES AND THAT RULE MUST BE ACCEPTED BY ALL THE SCRIPTING LANGUAGE.
//javascript runtime environment-

//in simple words a run time environment is where our program will be executed or in other words our javascript code can be executed anywhere if we have javascript runtime and ouur .js file runs 
//The console.log() is a function in JavaScript that is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.

//styntax-console.log('');
//values in javascipt- values in javascript are numbers.unlike other languages in javascript all values
// in javascript are treated as number values.

// let a=2;
// let b=2.9;
// console.log(a,b);

// here in the above example a is integer and b is decimal but in javascript both are treated as 
// number values.


// string in javascript-Strings are useful for holding data that can be represented in text form.

// let a= "kapil";
// let b= 'kapil';
// console.log(a,b);

// here in this case both the strings whether it is in single quatation or double quatation bothe are
//treated as strings.

//boolean in javascript-
//it is a type of datatype that returns two values either true or false,In JavaScript, Boolean is used as a function to get the value of a variable, object, conditions, expressions, etc. in terms of true or false.

// let a='true';
// let b='false';
// console.log(a);
// console.log(b);
//here in this case it is returning the value a as boolean value true and value b as false.

//null and undefined-
//they both are said to be empty values means they don not have any kind of value
//null is an intentional absence of the value and undefined means that the value does no exist in the compiler

// let a=20;
// if(a===undefined)
// console.log(true);
// else
// console.log(false);
//all these values are known as primitive values means one single value whereas non-primitive means
// more than onn value.

//ARRAY IN JAVASCRIPT-
//array in javascript is declared by [] means square bracket.Inside an array any valid data types 
// can be declared.Arrays help to store multiple values with the same data type in the name of a single variable, otherwise, we have to declare separate variables for each value. 

// let num=['1','2','3','4','5']
// console.log(num);

//Here a simple array is declared which contains 5 numbers and they are printed.

//Now let us declare an array with multiple data types

// let details=['Sachin','Tendulkar', '1','true','cricketer']
// console.log(details);

//Here in these array named details which contains multiple data types such as string ,number value
// boolean 

// Here inside array index is an important term  means at what position the value are kept.
//in array we access the values with the help of index
//means in the above array first name which is Sachin is at index-0
//last name which is tendulkar is at index-1
// ranking which is 1 is at index-2
//centiries made which is true is at index-3
// profession which is cricketer at index-4

//objects in javascript-
//objects are craeted in javascript using {} means curly bracket

//syntax-let object_name = {
//     key_name : value,
//     ...
// }

//here in objects every values are stored or access them in the form of keys and key could be of any choice.

// {
//     fname:kapil,
//     lname:sarkar,
// }

// let details={
//     fname:'kapil',
//     lname:'sarkar',
//     mobileno:'99999999'


// };
// console.log(details);
//Here an simple object is created by the name details which contains fname,lname,mobileno as keys and their respective details are shopwn below.

// Here fname and lname are the keys which stores the values kapil and sarkar respectively.

//This is non the end of object in javascript objects in javascript is a vst topic.

//Varibles in javascript--

//Variables in simple words are the place holders for values or in other words values are stored inside variables.
//variable in brief-
//A variable is simply the name of the storage location. Assume your computer memory as your storeroom, where you have placed each thing in a particular place. So when you require anything you go there and collect what you require.

// So your computer memory also works in the same way, which has n numbers of storage to store user's data. When the user pushes some data into memory user requires a placeholder or container that can hold the data. Variables are that container.

//types of variables- var,let,const
// there are three types of varibales var, let and const.
// var y=20;
//let x=30;
//const z=90;

// Here x, y,z are the variables which stores the values 20,30 and 90 respectively,
//the variable let can be changed and varable const cannot be changed,

//difference in varibales-
//var vs let vs const
//1.let & const are newly introduced in JavaScript
//2.let & const have block scope whereas var has global scope.

//3.Variables with a var a keyword can be redeclared anywhere in the program while redeclaring a variable inside the same scope is restricted with let & const.

//4.Variables with let keywords can be reassigned to a value inside the same block, which changes its original value.

//There are some scopes discussed earlier as block scope and global scope.

//block scope-Before ES6 JavaScript had only Global Scope & Local Scope. ES6 introduced two new keywords let & const , which have Block Scope.

// A set of code inside curly braces {} is called a block. Block-scoped means variables declared inside a block, can't be accessed outside the scope, and the life of the variables exists inside that block only.

//Variables that are not declared inside any function or scope belong to the global scope. In JavaScript, the whole document is the global scope and all the other functions and variables are contained in this global scope.

// The variables declared inside the global scope can be accessed from anywhere inside that code.

//Printing all the variables in a single line
// let fn= 'Kapil';
// let ln= 'Sarkar';
// const mobno='9564685056';
// console.log(fn,ln,mobno);
//Here in these case all values are printed in a single line.


//Template Literal in Javascript-
//provides new features to create a string that gives more control over dynamic strings. Traditionally, String is created using single quotes (‘) or double quotes (“) quotes. Template literal is created using the backtick (`) character.

// let fname='John';
// let lname='Cena';
// let city='US';
// console.log(`My Details are :${fname} ${lname} ${city}`);

//Operators in Javascript-Operators are used to performing specific mathematical and logical computations
//In JavaScript, operators are used to comparing values, perform arithmetic operations, etc. There are various operators supported by JavaScript:  

//Arithmetic Operator--
  //+(Addition)-'+' operator performs addition.
//   let x=10;
//   let y=20;
//   let z=x+y;
//   console.log(z);

//-(Subtraction)-- '-' operator performs subtraction
// let x=50;
// let y=20;
// let z=x-y;
// console.log(z);

//*(Multiplication)-- '*' operator performs Multiplication

// let x=20;
// let y=30;
// let z=x*y;
// console.log(z);

// /(Division)-- '/' operator performs Division

// let x=30;
// let y=10;
// let z=x/y;
// console.log(z);

// %(Modulus)--'%' gives remainder of an integer division

// let x=6;
// let y=4;
// let z=x%y;
// console.log(z);

// ++(Increment)--'++' operator increases an intger value by one

// let x=20;
// let y=x++;
// console.log(x,y);

//Here the value of x incements by one and becomes 21 and value of y becomes 20;

// --(Decrement)--'--' operator decreases an intger value by one

// let x=20;
// let y=x--;
// console.log(x,y);

//Here the value of x is decremented by one and becomes 19 and value of y becomes 20

//Assignment Operator--
//There are different Assignment operator in javascript

//= (Assignment Operator): Assigns right operand value to left operand. 

// let a=20;
// let y=a;
// console.log(y);

//Here in this case the value of a which is 20 is being assigned to y.

//+= (Add and Assignment Operator): Sums up left and right operand values and then assigns the result to the left operand. 

// let y=20;
// y+=1;
// console.log(y);

//Here it gives the result of y=y+1

//– = (Subtract and Assignment Operator): It subtracts the right side value from the left side value and then assigns the result to the left operand. 

// let y=20;
// y-=1;
// console.log(y);

//Here it gives the result of y=y-1

//* = (Multiply and Assignment Operator): It multiplies the right side value and the left side value and then assigns the result to the left operand. 

// let y=20;
// y*=1;
// console.log(y);

// //Here it gives the result of y=y*1

// /= (Divide and Assignment Operator):It divides the right side value and the left side value and then assigns the result to the left operand.

// let y=20;
// y/=1;
// console.log(y);
// // //Here it gives the result of y=y/1

//%= (Modules and Assignment Operator): It finds the remainder.

// let y=20;
// y%=2;
// console.log(y);
// Here the remainder of the following qoeration will be zero

//Comparison Operators: There are various Comparison Operators in JavaScript – 

//= =: Compares the equality of two operands. If equal then the condition is true otherwise false

//It only compares values

// let a=10;
// let b='10';
// console.log(a==b);

//Here a==b is true
//The equality operators checks whether its two operands are equal, return a boolean result if equal the condition is true otherwise false.






//===It compares the values and data types

// let x=10;
// let y='10';
// console.log(x===y);

//Here a===b is false

//Compares equality of two operands with data type. If equal then condition is true otherwise false.

//!= (Not Equal): Compares inequality of two operands. True if operands are not equal. 

// let x=10;
// console.log(x!=11);
// Here in this case the output will be true because the value assigned is 10 and it is not eual to 11 so it will be true.

//> (Greater than): This operator checks whether the left side value is greater than the right side value. If yes then it returns true otherwise it returns false. 
// let x=10;
// let y=11;
// console.log(x>y);

//< (Less than): This operator checks whether the left side value is less than the right side value. If yes then it returns true otherwise it returns false. 

// let x=20;
// let y=30;
// console.log(x<y);

//> = (Greater than or Equal to): This operator checks whether the left side operand is greater than or equal to the right side operand. If yes then it returns true otherwise it returns false. 

// let x=20;
// console.log(x>=21);

//<= (Less than or Equal to): This operator checks whether the left side operand value is less than or equal to the right side operand value. If yes then it returns true otherwise it returns false. 

// let x=20;
// console.log(x<=50);

//Logical Operators: There are various Logical Operators in JavaScript – 

//&& (Logical AND): It checks whether two operands are non-zero (0, false, undefined, null, or “” are considered as zero), if yes then return the last operand when evaluating from left to right.
//The && operator returns true if both expressions are true, otherwise it returns false.
// let x=10;
// let y=15;
// console.log(x<20 && y>1);

//Here in this case the value of x which is set to 10 is less than 20 sothe output is truue and alonhside the value of y which is 15 is greater than 1 so then also the output is true by the help of logical && operator.

//|| (Logical OR): It checks whether two operands are non-zero (0, false, undefined, null, or “” is considered as zero), if yes then return the first operand when evaluating from left to right. 

//The || returns true if one or both expressions are true, otherwise it returns false.

// let x=20;
// let y=30;
// console.log(x==10 || y==60);

// Here in both the cases the value of x and y which is set to 20 and 30 respectively are to similar to 10 and 60 so the output is set to be false.

//! (Logical NOT): It reverses the boolean result of the operand (or condition). 

//The NOT operator (!) returns true for false statements and false for true statements.

// let x=20;
// let y=30;
// console.log(!x>y);

//Here by the logical NOT OPERATOR x ids nit graeter than y so it returns the value false.

//Ternary Operator: 
//: ? Operator:It is like the short form of the if-else condition. 

// let x=10;
// let y=70;
// console.log(x?y);