//conditions in javascript:
// We will start this article with conditions in javascript 
// if else condition-
//It is a type of condition where it will execute a block of code when the condition in the if statement is true.If the condtion is false then the else block will be executed.
// syntax-
//if (condition is true) {
   // code is executed
// } else {
//     // code is executed
//  }
//Let us see with an example:
// let age=3;
// if(age<=5){
//    console.log('Welcome to Primary Kids Section');

// }
// else{
//    console.log('Welcome To Upper Primary Kids SEction');
// }
// Here in this condition is evaluated to true so it goes towowars the if statement.
//Now if the condition is evaluted to false then
// let age=6;
// if(age<=5){
//    console.log('Welcome to Primary Kids Section');

// }
// else{
//    console.log('Welcome To Upper Primary Kids SEction');
// }
// else if condition-
//Now in this case we have to check multiple statements so else if condition is used
//here when the if statement is false then it will move into the elseif statement
// now if that is also false then it will move into the else statement.
//Let us Understand with a example -
// let cricketer='Sachin';
// if (cricketer=='Sachin'){
//    console.log('God of Cricket');
// } 
// else if (cricketer=='Virat'){
//    console.log('Run Machine');

// }
// else if(cricketer=='Rahul'){
//    console.log('The Wall');
// }
// else{
//    console.log('Not a Cricketer');
// }
// Now Here in this Case the first statement is true so it does not move into the else if condition.
//Here if the first statement is false then
// let cricketer='Virat';
// if (cricketer=='Sachin'){
//    console.log('God of Cricket');
// } 
// else if (cricketer=='Virat'){
//    console.log('Run Machine');

// }
// else if(cricketer=='Rahul'){
//    console.log('The Wall');
// }
// else{
//    console.log('Not a Cricketer');
// }
// Now here the second condition becomes true so the second staetement is executed
//switch case in javascript-
//There will be some cases in javascript where we will use the switch-case over else-if but in most of the case we are going to use else if condition.
//Here in the case of swith case the switch statement evaluates a variable/expression inside parenthesis
//if the result of the expression is equal to the first case then the first block will be executed and if the result of the expression is equal to the second case then the second block will be executed ans the same thing goes on and at last the default block will be executed
//Now let us understand swithh case with an example-

// let sports='Cricket';
// switch(sports){
//    case 'Cricket':
//       console.log('Welcome to Game of Cricket');
//       break;
//       case 'Football':
//          console.log('Welcome to Game of Football');
//          break;
//          case 'Hockey':
//             console.log('Welcome to Game of Hockey');
//             break;
//             default:
//                console.log('Other Sports');
// }
//Now in this case the first case becomes true so the first block of code is executed 
// if the second case becomes true then
// let sports='Football';
// switch(sports){
//    case 'Cricket':
//       console.log('Welcome to Game of Cricket');
//       break;
//       case 'Football':
//          console.log('Welcome to Game of Football');
//          break;
//          case 'Hockey':
//             console.log('Welcome to Game of Hockey');
//             break;
//             default:
//                console.log('Other Sports');
// }
// Here in this case second case becomes true so the second statement is executed
// Now in both the cases we have written a keyword break if we do not use the keyword break then
// what would be the outcome
// let sports='Cricket';
// switch(sports){
//    case 'Cricket':
//       console.log('Welcome to Game of Cricket');
      
//       case 'Football':
//          console.log('Welcome to Game of Football');
//          break;
//          case 'Hockey':
//             console.log('Welcome to Game of Hockey');
//             break;
//             default:
//                console.log('Other Sports');
// }
// Here we can see the result  the first case becomes true the first statement is executed but then also
// it jumps onto the second block of code and the second statement is also executed

//Ternary Operator/Ternary Condition-The Ternary Operator is a Conditional Operator which evaluates
//either of two expressions a true expression and a false expression=
//syntax-
//condition ? trueExpression : falseExpression
//As in the above syntax ternaty operator is created by two operators ? and :
//After ? the true expression  and after : the false expression
//It is mostle used for checking in user login and logout option
// Now let us understand with an example:

// let userlogin=true;
// userlogin ? console.log('logout') : console.log('login');
// Here we can see the userlogin is true that means the user is logged in so it will display logout
// Now if the userlogin becomes false or the user is not logged in then:
// let userlogin=false;
// userlogin ? console.log('logout') : console.log('login');
// Here we can see the result it is displying the login messsage.


