const months = ["January", "February", "March", "April", "May"];

//Printing Array elements using for each

months.forEach((months) => {
  console.log(months);
});

//Map() Function---

const capitalMonth = months.map((month, index) => {
  console.log(index, month);
  return month.toUpperCase();
});
console.log(capitalMonth);

//Other Examples of map() function---
const arr = [5, 6, 9, 10, 20];

//Double---

const output = arr.map((x) => {
  return x * 2;
});
console.log(output);

//filter()--
//filter all the odd values inside array--

const result = arr.filter((y) => {
  return y % 2;
});

console.log(result);

//reduce()---

const arr2 = [2, 10, 20, 15, 32];

function findSum(arr2) {
  let sum = 0;

  for (let i = 0; i < arr2.length; i++) {
    sum = sum + arr2[i];
  }

  return sum;
}

console.log(findSum(arr2));

const sumResult = arr2.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(`The sum function in case of reduce is :${sumResult}`);

//Finding the max value in an array by normal function ---

function findMax(arr2) {
  let max = 0;
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] > max) {
      max = arr2[j];
    }
  }
  return max;
}
console.log(
  `The maximum value inside array by normal function is : ${findMax(arr2)}`
);

//finding the maximum value in an array by reduce function---

const outputReduce = arr2.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(`The maximum value inside array by reduce is : ${outputReduce}`);

//Advance concepts of  map filter and reduce
//Array of Objects
const users = [
  { fName: "Kapil", lName: "Sarkar", age: 32 },
  { fName: "Johm", lName: "Cena", age: 50 },
  { fName: "Brock", lName: "Lesnar", age: 47 },
  { fName: "Piku", lName: "Sarkar", age: 32 },
  { fName: "Hrithik", lName: "Roshan", age: 44 },
];

//Find list of fullName of all the users---

const outputFullName = users.map((x)=>{
    return x.fName + " " + x.lName
})
console.log(outputFullName)

//Find the list of user which have the particular unique age---

const outputAge = users.reduce(function (max,unq){
  if(max[unq.age]){
    max[unq.age] = ++max[unq.age] 
  }
  else{
    max[unq.age] = 1 
  }
  return max
},{})

console.log(outputAge)

//Find the first name of all the people whose age is less than 40---

const ageLess = users.filter((z)=> z.age < 40).map((z)=> z.fName)
console.log(ageLess)
