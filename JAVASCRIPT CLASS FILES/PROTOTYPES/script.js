//Prototypes in java Script-

//In JavaScript, every function and object has a property named "prototype" by default.
//Whenever we create an object or function JavaScript engine adds a built-in Prototype property inside the object or function.
//Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//Every object in JavaScript has a built-in property, which is called its prototype. 
//In simple words it can be said that a Prototype is an object, which JavaScript assigns to the [[Prototype]] property of an object when it creates it. Every function includes a prototype object by default.
//The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.


//All JavaScript objects inherit properties and methods from a prototype.


// const mydetails ={
//     fname:'kapil',
//     lname:'sarkar',
// }
// console.log(mydetails.__proto__);
//Here first an object is created by the name mydetails.

//The same code when we are running on the browser console we are getting the output as :.
//Now let us understand this in detail-
//The  __proto__.--> The __proto__ points to the Prototype object of the mydetails object.
//The obove picture shows all the poperties of object.It is a old way of getting prototype property.

//Now let us create an array to understand this :
// let coding=['c','c++','javascript'];
// console.log(coding.__proto__);
// console.log(Object.getPrototypeOf(coding))
//The getPrototypeproperty property we used in nowadys to get prototype property.
//here in this picture all the protype propertis are defined.
//Arryas are inheriting properties from object and these properties are injecting in the prototypes.

// const cricket={
//     names1:'Sachin',
//     names2:'Virat',
// }
// console.log(Object.getPrototypeOf(cricket));
// here in this picture all the protype propertis are defined.


// Prototype Description-
//The Graphical Description-
//Let us discuss the Graphical descriptioon there are three Prtotypes Protype'Virat',Prototype'Hardik','Protype'Dravid.'
//In maximum cases Protopype-'Virat' contains the most essential feature that a cricketer shouls have means Batting.Similarly Protype 'Hardik' also containns the the essential feature that a cricketer should have is batting but it also contains the feature bowling.
//Noe in Prototype 'Dravid' contains the essential feature of cricketer batting but this prototype also contains the feuture of wicket-keeping
//We can now come to the conclusion that Protype'Hardik' and Prototype'Dhoni' are the improved version of Protype'virat'. 
//Advantages of prototype :
//Protypes makes it easy for objects and fubctions to keep only one copy of features and for which the neversions of the protypes also have the access.
//So the new versions ned not have to have to maka a copy of one particular feature they just need to make thier own individual features.
//It can also be said as the protoype inheritance. 

//Let us understand this with an example-

// const myname={
//     flname:"KapilSarkar"
   
// }
// const myaddress={
//     addr:'India',
//     indian:true
   
// }
// const fulldetails={
//     job:true
// }
// Object.setPrototypeOf(fulldetails,myaddress)

//Here we have declared an object property known as setPrototypeOf.By this property the object named fulldetails get the access of the propertis of myaddresss

//Getting true length of a string-
// String.prototype.truelength=function(){
//     console.log(`True Lenght is :${this.trim().length}`);
// }

// let myname='Kapil Sarkar   ';
//console.log(mynname.truelength(myname));
//browser code -myname.length
//myname.truelength.
//The lenght of the string is 15
//the true length of the string is 12.

//Prototype Chaining:
//