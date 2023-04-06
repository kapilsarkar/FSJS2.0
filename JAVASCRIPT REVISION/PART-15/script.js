let userName = "Anurag";
userName = "Kapil";
console.log(userName);

const user = {
  firstName: "Kapil",
  lastName: "Sarkar",
  address: {
    city: "Asansol",
    pincode: 713325,
    state: "West Bengal",
    moreDetails: {
      population: 82783108130,
      area: 2342542,
    },
  },
  age: 15,
  isGraduate: false,
};
user.mobileNumber = 9898989899;

console.log(user);

delete user.address.moreDetails.area; //For Deleting a Particular key value pair inside Object
delete user.address.moreDetails //For Deleting the whole Object named moreDEtails which was declared inside user
//For Preventing Deletion

Object.seal(user)
delete user.firstName //No deletion will take place
user.star ='MS DHONI' 
user.firstName ='Piku'
console.log(user.firstName) //Value Updated
Object.freeze(user)
user.firstName = 'John'
console.log(user.firstName)
//in keyword for checking the existinf key pairs is there or not
console.log('mobileNumber' in user)
console.log('star' in user)