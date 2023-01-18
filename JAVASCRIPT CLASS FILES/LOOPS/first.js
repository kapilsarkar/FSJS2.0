//LOOPS IN JAVASCRIPT-
//Loops are used in programming for the repeatattio.There are different types of loops in javascript-let us understand them
//While Loop-
//Syntax-
// while ( condition){
//     statements;
//     //body of loop
//  }

//1.The condition appers in the starting of the loop
//2.While Loop is also known as entry controlled loop
//3.There is no condition at the end of the loop.
//4.If the condition inside the loop becomes true then the code inside the loop is executed.
//5.The condition is evaluate again and when the condition becomes false then the loop stops.

//Lets understand while loop with an example-

// let num=5;
// while(num<=10)
// {
//     console.log('Value of num is' , num);
//     num++;
// }
//Here the value of num is set to 5 and the condition is being checked wheter the num is less than or equal to 10 and as soon as the num value reaches to 10 the loop stops,here the num++ is the increment.So the output achieved is.
//Do-While Loop-
//syntax-
// do {
//     statements;
//     // body of loop.
//  }
//  while( Condition );
//1.The condition is present at the end of the loop
//2.Do-While Loop is also known as exitcontrolled loop
//3.There is a condition at the end of the loop.
//4.During the first condition check of the loop if the condition is false then also the loop will be executed once.
//5.If condition is true then the loop continues untill the loop condtion ends.

//Let us understand do-while loop with an example-
// let num=5
// do{
//     console.log('Value of num is ',num);
//     num++;
// }while(num<=10);
//Here the output is same as the while loop because the condition are being same.
//Difference between While Loop and Do-While Loop
//Let us understand this with an example.

// let i=11;
// while(i<=10){
//     console.log('Value of i is',i);
//     i++;
// }
//Here the condtion does not satisfies so the condtion is not checked once so in the output there is nothing.

// let j=11;
// do{
//     console.log('Value of j is',j);
//     j++;
// }while(j<=10);
//Here also the condition becomes false but the code will go inside the loop once and it will print the value of j then as soon as the condition is checked then the loop ends.

//For Loop-

//Syntax-
//for(initialization; condition; increment/derement){
   //body of the 'for' loop
//}
//1.The initialization,condition checking and incrementor decrement is done at the beggining of the statement.
//2.If the condition is not mentioned in the for loop then it will go infinite times.
//3.The initialization is done once and it is not repeated.

//Let us understand for loop with an example-

// for(let i=0;i<=11;i++)
// {
//     console.log('Value of i is',i );
// }

//Break and continue-
//Break-It simply means terminate everything and come out of the loop
//Now let us understand with an example-
// for(let i=0;i<=5;i++){
//    if(i==3){
//       break;
//    }
//    console.log(i);
// }
//So here in this case the loop will break as soon as it will reach the condition i==3
//and it print the from 0 to 2.

//continue-It simply means skip and continue 
//Now let us understand with an example-
// for(let i=0;i<=5;i++){
//    if(i==3){
//       continue;
//    }
//    console.log(i);
// }
//Now here in this case it will print all the values from 0 to 5
//means it will skip the value 3 and the output is

//So here the value of i is printed from 0 to 11. 

// for(let i=0;i<=10;i++){
//     console.log(`${i} * ${i}=${i*i}`);
//     console.log(`${i} + ${i}=${i+i}`);
//     console.log(`${i} - ${i}=${i-i}`);
// }
//For ofLoop-
//For of loop is used in array insimple words it itterates over an array-
//Let us understand this with an example-
// let cricketrs=['Kapil','Sachin','Virat','Rohit','Surya'];
// let uppercase=[];
// for(let top of cricketrs){
//    uppercase.push(top.toUpperCase());
// }
// console.log(uppercase);
//Here first an array is declared with the name cricketrs which contains 5 values
//Then an empty array is declared named uppercase
//By the help of for of loop and touppercase method all the values in the array named cricketrs are then shifted towards the empth array named uppercase with all the values having capital letters.
//The output displayed is-