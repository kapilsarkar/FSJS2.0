let names = {
  firstName: "Kapil",
  lastName: "Sarkar",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " ," + state
  );
};
printFullName.call(names, "Asansol", "West Bengal");

//Function borrowing---

let names2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

printFullName.call(names2, "Mumbai", "Maharashtra");

//Apply() method---

printFullName.apply(names2, ["Mumbai", "Maharashtra"]);

//Bind() Method ---
let printmyName = printFullName.bind(names, "Asansol", "West Bengal");
console.log(printFullName)
printmyName()