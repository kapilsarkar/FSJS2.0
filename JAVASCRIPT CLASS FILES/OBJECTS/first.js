//Objects in Javascript :
// Objects in javascript are one of the non-primitive datatypes which allow us to store multiple values in key-value pairs. These key-value pairs are known as properties. The key is also called as property name and the value is also called the property value.
//Objects are the most used data type in JavaScript.
//Objects make it easy to work with data.
//In simple words it can be said An object is a collection of data in the form of key-value pairs. Objects have keys and every key has a corresponding value. These values can be as simple as a number or string or maybe some complex types like function or even another object itself.
//Lets for example if we want to store name of cricketrs we will use array on thr other hand if we want to store name , matches played,runs scored by a cricketrs then object is used.

//Syntax for creating object :
//An object is created by first decalring the variable declaration then name of object after that = sign and curly {}.Here in this case an empty object is created. An empty object is called object literal.
//let us understand object by an example-
//  const cricket = {
//     name1:'Virat Kohli',
//     matchesplayed:'100',
//     runsscored:'2000',
//     currentsataus: true
//  };
//  console.log(cricket);

 //Here in this case an an object is created by tha name of cricket.
 //name1,mathchesplayed,runscored,currentstatus are the keys and viratkohli,100,2000 and true are the values of the respective keys and all the key value pairs are separated by commas.
 //The combination of both key and values are called the property of an object.
 // Apart from these string, number, bigint, boolean, null, undefine, symbol all are objects in javascript.
  
 //Creating object using a construvtor-

 const kapil =new Object()

 kapil1.country='India'
 kapil1.religion='Hindu'
 console.log('kapil1');

 // Acessing properties of an object -

 //There are two ways by which the properties of an object can be accessed.
 //1. Dot Notation-
 //To get the value of a property from an object, we can use a dot (.). The syntax is object.property
//  const details = {
//    fname:'Kapil',
//    lname:'Sarkar',
//    coutntry :'India'
//  };
//  console.log(details.fname);
//  console.log(details.lname);
//  console.log(details.coutntry);

 //2. Using Bracket Notation-
 //We can also get the value of a property using [ ]. 

//  console.log(details['fname']);