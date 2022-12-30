//onsole.log('Kapil Sarkar');

// array in javascript

//console.log('Katu Sarkar');

//Array in javascript :Arrays in javascript is an object which is used to store multiple values having the same or different data types in a group. That means we can store elements of type Number, Boolean, String, Object, etc.
// The strength of JavaScript arrays lies in the array methods. Array methods are functions built-in to JavaScript that we can apply to our arrays — Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch

//Simple declaration of array-->
// let lang  = ['c','c++','java','python','javascript']
// console.log(lang);

// let names = ['Sachin','Virat','Dhoni','Rohit'];
// names.push('Kapil');
// console.log(names);

// let sports =['cricket','footbal','hockey','chess','carrom'];
// sports.pop();
// console.log(sports);

// let mobiles =['samsung','motorola','apple','readme','vivo'];
// mobiles.shift(mobiles);
// console.log(mobiles);

// let actors = ['shahrukh','salman','aamir','amitabh','htithik'];
// actors.unshift('akshay');
// console.log(actors);

// let cricketers =['Sachin','Rahul','Shewag','Virat','Dhoni'];
// let cricketers2 =['Gautam','Yuvraj'];
// console.log(cricketers.concat(cricketers2));

// let cricketers =['Sachin','Rahul','Shewag','Virat','Dhoni'];
// console.log(cricketers.slice()); // All elements included
// console.log(cricketers.slice(2)); // All elements included from index 2
// console.log(cricketers.slice(1,3)); // All elements included from index 1 to 3(3 not included)

// let cricket = ["sachin","virat"];
// console.log(cricket.splice(1,0,"yuvraj","dhoni")); // inserting "yuvraj", "dhoni" from index 1 without removing(0) any elements
// console.log("Updated List : ", cricket);

// fruits = ["Mango", "Apple","Banana"];
// console.log(fruits.splice(1,1,"Cherry")); // replacing index 1 element "Apple" to "Cherry"
// console.log("Updated Fruits : ", fruits);

// fruits = ["Mango", "Apple", "Banana","Watermelon","Grapes"];
// console.log(fruits.splice(1,3));    // removing 3 elements from index 1
// console.log("Updated Fruits : ", fruits);

// let cricketers =['Sachin','Rahul','Shewag','Virat','Dhoni'];
// console.log(cricketers.toString());

// let cricketers =['Sachin','Rahul','Shewag','Virat','Dhoni'];
// console.log(cricketers.join('&'));

// let cricketers =['Sachin','Rahul','Shewag','Virat','Dhoni'];
// console.log(cricketers.reverse());

// let cricketers =['Sachin','Rahul','Shewag','Virat','Dhoni'];
// console.log(cricketers.sort());

// let cricketers =['Sachin','Rahul','Shewag','Virat','Dhoni'];
// console.log(cricketers.includes('Sachin'));

// let cricketers =['Sachin','Rahul','Shewag','Virat','Dhoni'];
// console.log(cricketers.indexOf('Rahul')); //present at index 1
// console.log(cricketers.indexOf('Gambhir'));//not present in the array

// let cricketers =['Sachin','Rahul','Shewag','Virat','Dhoni'];
// console.log(cricketers.lastIndexOf('Sachin'));
// console.log(cricketers.lastIndexOf('Gambhir'));

// let arr1 =['2','34','20','15','50'];
// console.log(arr1.find(element => element >2));

// let arr1 =['2','34','20','15','50'];
// console.log(arr1.findIndex(element => element >2));

// let n1 = [1,4,9,16,25,36,49,64,81,100];

// let n2 = n1.map(Math.sqrt);

// console.log("Numbers :",n2);

// let n1 = [1,2,3,4,5,6];
// console.log(n1.fill(1));  // fill 1 in place of all element place

// n1 = [1, 2, 3, 4, 5, 6];
// console.log(n1.fill("React",2))   // filling "React" from index 2 to end

// n1 = [1, 2, 3, 4, 5, 6];
// console.log(n1.fill("JS",1,4));   // filling "JS" from index 1 to 4(excluding 4)

let line = "Happy Learning Happy Learning Happy Learning";

console.log(line.split(" "));







