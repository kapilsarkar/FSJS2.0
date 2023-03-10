// DATE MATH RANDOM POWER
//Unlike other operators in javascript there are some other operators which are date,math random,power
//date and math-
//javascript provides a date object that gives us the date and time in your code.
//The date object is used to work with dates and times and javascript.It can create a new Date object by calling the Date() constructor to get the current date and time

//The date() object has several methods let us expplre these methods.
// const now=new Date();
// console.log(now);  
//Here now is a variable and new is a variable it will assign memory to something.
//date is an method.
//It gives us the current date and time which fetches out from your system
//tostring()-It gives the date and time in a string format as we can see in the output-

// const now=new Date();
// console.log(now.toString());

//getFullYear()-by the getFullYear() method we can get the full Year as displayed in the Output-
// const now=new Date();
// console.log(now.getFullYear());

// We can also set the full date month and year by our own choice,let us see how we can achive this-
//  let newdate= new Date('2030-02-02');
//  console.log(newdate);
 //so the output we can see is by passing a string in a date method

 //setFullYear()-
 //We can use the setFullYear method and set the year 
//  Newyear.setFullYear(2050);
//  console.log(Newyear);
//getMonth()-We can get the current monthe by this method-it displays the month,form 0-11 according to local time.

// const now=new Date();
// console.log(now.getMonth());
//getDay-We can get the Day of the week for 0-6 according to local time.
//getDate()-Gets the day of the month (1–31) according to local time
//getTime()-Gets time
//getHours()-Gets the hour from 0 to 23 according to local time\
//getMinutes()-Gets the minute from 0 to 59 according to local time
//getSeconds()-Gets Seconds according to the local Time
//getUTCDate-Gets the day of the month (1–31) according to universal time

//Math-
//The Math object provides properties and methods for mathematical constants and functions
// const PI=Math;
// console.log(PI);
//Math.round()-This method is used to round a number to the nearest integer
// let num=3.2;
// console.log(Math.round(3.2));
//It makes the number to the nearest integer to-3
//Similarly we can also do with this approach

// const PI=Math;
// console.log(PI);
// console.log(Math.round(9.5));
// console.log(Math.round(9.2));

//In the both the cases we have seen the number is being rounded to its nearest integer which is 9.5 becomes 10 and 9.2 becomes 9.
//Math.floor()-By this methid the smallest number is displayed.
const PI=Math;
console.log(Math.floor(9.5));
//It returns the value 9 from 9.5
//Math.ceil()-By this method the greater number is displayed.
console.log(Math.ceil(9.5));
//It reurns the value 10 from 9.5
//math.trunc-By this method the digits after integer is removed.
console.log(Math.trunc(5.678));
//So we can see the digits after5 is displayed.
//Math.sign()-By this method it returns 1 for +ve number and -1 for -ve no..
console.log(Math.sign(489));
console.log(Math.sign(-489));
//So as discussed it returns 1 for +ve no and -1 for -ve no.
//Math.sqrt()-By this method it gives us the square root.
console.log(Math.sqrt(144));
//It returns 12 which is square root of 144.
//Math.abs()-By thsi method we get the positve no
console.log(Math.abs(-20));
// it returns 20 from -20 which is the positive number
//Math.random()- By this method we get the random number between 0 and 0.9009.
console.log(Math.random());
console.log(Math.random()*10);
//It will generate a number form 0 to 10
console.log(Math.random()*50);
//It will generate a number from 0 to 50
//Math.pow()-By this method it will raise the power.
console.log(Math.pow(5,2));
//It returns the number 5*5=25.
//Math.max() and Math.min()-These methods are used to find the maximum and minimum values from a set of numbers.lets see with an example-
let num=Math.max(20,30,50,60,90);
console.log(num);
//Here in this case it will find the maximum numbers out of the rest so the output is
let num1=Math.min(20,30,50,60,90);
console.log(num1);
//Here in this case it will find the minimum numbers out of the rest so the output is