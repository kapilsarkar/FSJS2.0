//Map()---
const months = ["January", "February", "March", "April", "May", "December"];

const capitalMonths = months.map((x) => {
  return x.toUpperCase();
});
console.log(capitalMonths);

//Filter()---
const filteredMonths = months.filter((x) => {
  if (x.length > 5) return x;
});
console.log(filteredMonths);

//Filtered the months which contains m---
const filteredMonths2 = months.filter((x) => x.toLowerCase().includes("m"));
console.log(filteredMonths2);

//Filter method for students---

const students = [
  {
    fname: "Kapil",
    age: 32,
  },
  {
    fname: "John",
    age: 20,
  },
  {
    fname: "Harry",
    age: 16,
  },
  {
    fname: "Krishna",
    age: 5,
  },
  {
    fname: "Virat",
    age: 25,
  },
];

const adultStudents = students.filter((x)=> x.age > 18).map((x)=> x.fname)
console.log(adultStudents)

const childStudents = students.filter((student)=>{
    return student.age < 18
}).map((student)=>{
    return student.fname
})

console.log(childStudents)

//Reduce()---
const nums = [1,2,4,3,5,9]

nums.reduce((accumulator,current)=>{
   console.log(`The value of current ${current}`)
   console.log(`The value of accumulator ${accumulator} `)
   return `The value of their sum is ${accumulator + current}`
},1)
