//Prototypes in java Script-

//In JavaScript, every function and object has a property named "prototype" by default.

//Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

//Whenever we create an object or function JavaScript engine adds a built-in Prototype property inside the object or function.

//Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//
//A Prototype is an object, which JavaScript assigns to the [[Prototype]] property of an object when it creates it. Every function includes a prototype object by default.

//All JavaScript objects inherit properties and methods from a prototype.


// const mydetails ={
//     fname:'kapil',
//     lname:'sarkar',
// }
// console.log(mydetails.__proto__);

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

//