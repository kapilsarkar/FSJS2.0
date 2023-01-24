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
  
 //Creating object using a constructor-

//  const kapil =new Object();

//  kapil.country='India'
//  kapil.religion='Hindu'
//  console.log(kapil);

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

//Update of properties in an object-
//In object the existing properties of can be updated and also new properies can be added-
// const mydetails={
//     fname:'Kapil',
//     lname:'Sarkar',
//     address:'Asansol'
// }
// console.log(mydetails);

//Adding new property to an existing object-
//mydetails.phoneno=9999999999;
//console.log(mydetails);
//Update of property to an existing property-
//mydetails.address='Burnpur';
//console.log(mydetails);
//Deletion of property-

//delete mydetails.lname;
//console.log(mydetails);


//Creating Methods in Javascript-
//Functions in object are called methods 

// const mydetails={
//     fname:'Kapil',
//     lname:'Sarkar',
//     address:'Asansol',
//     getaddress(){
//         console.log(`Address is :${mydetails.address}`);
//     }
// }
// //console.log(mydetails);
// mydetails.getaddress();

//Here a method is declared by name getaddress()
//The methods is invoked by mydetails getaddress()

//Creating Nested Objects-
//Insie as object can also create a bunch of objects in it.

// const details ={
//     mydetails :{
//         fname :'Kapil',
//         lname :'Sarkar',
//         address:'Asansol',
//         myinfo:{
//             education:'MCA',
//             rolemode:'Sachin Tendulkar',
//         }
        
//     }
// };  console.log(details);

//For in Loop -
//For in Loop is used in javascript in case of object.
//  let mydetails={
//     fname:'Kpail',
//     lname:'Sarkar',
//     address:'Asansol'
//  }
//  for(let x in mydetails){
//     console.log(x);
//  }
//  for (let x in mydetails){
//     console.log(mydetails[x]);
//  }

 //Here by the help of for in loop the properties of the objects are fetched amd printed.

 //object.create()-Objects can also be created using the Object.create() method.This method can be very useful because it allows you to choose the prototype object for the object, you want to create, and in this, we do not have to define a constructor function.
 //let us understand this with an example :

//  let cricket={
//       batsman:true,
//       bowler:true,
//  };
//  let sports=Object.create(cricket);
//  //console.log(sports);
//  console.log(sports.batsman);
//  console.log(sports.bowler);

//object.defineProperty()-
//n JavaScript is a standard built-in Object that defines a new or modifies existing properties directly on an object and it returns the object.

//Syntax-
//Object.defineProperties(obj, props) 

//Here the two parameters passed are-
//obj:This parameter holds the object on which the properties are going to be defined or modified.
//props:This parameter is an object whose own enumerable properties constitute descriptors for the properties to be defined or modified.
//Return Value: This method returns an object which is passed as an argument to the function.

//Let us understand this with ana example-
// const myname={}
// myname.fname='Kpail Sarkar';
// console.log(myname);
//Now let us do the same thing by object.defineProperty-
// const myname={}
// Object.defineProperty(myname,'fname',{
//    value:'Kapil',
//    writable:false
// })
// myname.fname='Kapil Sarkar';
// console.log(myname.fname);

//Notice, we define the property just like the first case but later we change the value of the property as 'Kapil Sarkar' and print the value but it is not changed. This happened due to the attribute defined writable: false for this. It could restrict the modification and the value is still the same. So, it is a kind of advanced method, we can say.

//Here only Kapil is printed
//Now if the writable property is set to true then-
// const myname={}
// Object.defineProperty(myname,'fname',{
//    value:'Kapil',
//    writable:true
// })
// myname.fname='Kapil Sarkar';
// console.log(myname.fname);
//So here in these case Kapil SArkar is printed.

//By using this keyword-
//this refers to the parent scope. Here, we should remember one thing we can't use the arrow function as the arrow function does not have the context for this
// const details={
//    fname:'Kapil',
//    lname:'',
//    fulldetails : function() {
//       this.lname += 'Sarkar';
//       return this;
//    },
// };
//console.log(details.fulldetails());

//Chaining of Function-
//console.log(details.fulldetails().fulldetails().fulldetails());

//getters and setters in javascript-
//Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set:

//Syntax-
//let obj = {
//    get propName() {
//       // getter, the code executed on getting obj.propName
//     },
  
//     set propName(value) {
//       // setter, the code executed on setting obj.propName = value
//     }
//   };

// let details={
//    fname:'Kapil',
//    lname:'Sarkar',

//    get mydetails(){
//       return `${this.fname} ${this.lname};`
//    } ,
//    set mydetails(value){
//       [this.fname,this.lname]=value.split(' ');
//    }
// };
// console.log(details.mydetails.split(' '));





