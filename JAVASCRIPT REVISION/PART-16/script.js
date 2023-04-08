const userName = "Kapil Sarkar";
console.log(userName[2]);
const fruitsCollection = ["Apple", "Banana", "Grapes", "Dates", "PineApple"];
console.log(fruitsCollection[2]);
fruitsCollection[2] = "Mango";

fruitsCollection[3] = "WaterMelon";
fruitsCollection[5] = "Orange";
console.log(fruitsCollection);
console.log(fruitsCollection.length);
const rainbowColors = [
  "Violet",
  "Indigo",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Red",
];
rainbowColors[rainbowColors.length] = "Pink";
rainbowColors.push = "Black";
rainbowColors.push = "White";
rainbowColors.pop();
console.log(rainbowColors);

//Array Methods---
const evenNum = [1, 7, 8, 0.12, 18, 4];
//evenNum.unshift(20)
console.log(evenNum);

const animals = ["Dog", "Elephant", "Tiger", "Lion", "Deer", "Cow"];
const newAnimals = evenNum.concat(animals);
console.log(newAnimals);
const index = animals.indexOf("Tiger");
console.log(index);
//slice()-
console.log(animals);
const slc = animals.slice(2, 4);
console.log(slc);
//splice()-
const cricketers = [
  "Sachin",
  "Virat",
  "Rohit",
  "Dravid",
  "Dhoni",
  "Russel",
  "Sourav",
];
console.log(cricketers);
const spc = cricketers.splice(6, 1);
console.log(spc);
const newspc = cricketers.splice(3, 1, "Pujara");
console.log(newspc);
console.log(cricketers);

//Multidimensional Array-
const nameAndNumberList = [
  ["Kapil", 90],
  ["John", 95],
];
console.log(nameAndNumberList);
const multi = nameAndNumberList[0][0];
console.log(multi);

const ticTacToe = [
    ['X',null,null],
    [null,null,'O'],
    ['O',null,'X']
]
const t1= ticTacToe[0][2]
console.log(t1)